const {getAllFruitVeg} = require("../controllers/fruitveg.controller");

const fruitVegRouter = require('express').Router()
fruitVegRouter.route("/").get(getAllFruitVeg);

module.exports = fruitVegRouter;