const {getAllAnimals} = require("../controllers/animals.controller");

const animalsRouter = require('express').Router()
animalsRouter.route("/").get(getAllAnimals);

module.exports = animalsRouter;