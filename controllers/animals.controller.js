const {fetchAllAnimals} = require("../models/animals.model");

function getAllAnimals(req, res, next){
    fetchAllAnimals().then((animals) => {
      res.status(200).send({ animals });
    });
  }

module.exports = { getAllAnimals };