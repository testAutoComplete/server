require = require("esm")(module);
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
const countries = require("./src/routes/countries");
const { createDictionary } = require("./src/services/create_dictionary");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/countries", countries);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  createDictionary();
  console.log(`Now listening on port ${port}`);
});
