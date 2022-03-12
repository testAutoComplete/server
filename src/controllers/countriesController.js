const { search } = require("../lib/trie");
const { dictionary } = require("../services/create_dictionary");
const data = require("../data/countries.json");

exports.countries_suggestions = function (req, res) {
  const predictions = search(req.body.value.toLowerCase(), 0, dictionary);
  res.send(predictions);
};

exports.select_country = function (req, res) {
  const selectedCountry = data.find(
    (country) => country.name.toLowerCase() === req.body.value
  );
  res.send(selectedCountry);
};
