"use strict";

const htmlParser = require("prettier/parser-html").parsers.html;

// https://prettier.io/docs/en/plugins.html#languages
const languages = [
  {
    extensions: [".mtml"],
    name: "MTML",
    parsers: ["mtml"],
  },
];

// https://prettier.io/docs/en/plugins.html#parsers
const parsers = {
  mtml: Object.assign({}, htmlParser, {
    parse: (text, parsers, options) => {
      text = text.replace(/(mt:?else[^>]*)/gi, (all, m) => `${m}/`);
      const data = parsers.html(text, parsers, options);
      return data;
    },
  }),
};

module.exports = {
  languages,
  parsers,
};
