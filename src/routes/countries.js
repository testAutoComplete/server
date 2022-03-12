const express = require("express");
const router = express.Router();
const countries_controller = require("../controllers/countriesController");

router.post("/suggestions", countries_controller.countries_suggestions);
router.post("/select_country", countries_controller.select_country);

module.exports = router;
