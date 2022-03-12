const { add, makeNode } = require("../lib/trie");
const countries_data = require("../data/countries.json");

export const dictionary = new makeNode("\0");

export const createDictionary = () => {
  for (const country of countries_data) {
    add(country.name, 0, dictionary);
  }
  return dictionary;
};
