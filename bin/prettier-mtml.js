const doc = require("prettier/doc");
const orig = doc.printer.printDocToString;
doc.printer.printDocToString = (...args) => {
  const tabWidth = args[1].tabWidth;
  const res = orig(...args);
  res.formatted = res.formatted.replace(
    new RegExp(` {${tabWidth}}(<mt:?else[^>]*)\/>`, "gi"),
    (all, m) => `${m.replace(/\s+$/, "")}>`
  );
  return res;
};

const p = require("prettier/bin-prettier");
module.exports = p;
