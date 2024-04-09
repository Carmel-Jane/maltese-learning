const {fetchAllFruitVeg}= require("../models/fruitveg.model");

function getAllFruitVeg(req, res, next){
    fetchAllFruitVeg().then((fruitveg) => {
      res.status(200).send({ fruitveg });
    });
  }

module.exports = { getAllFruitVeg };