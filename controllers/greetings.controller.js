const {fetchAllGreetings} = require("../models/greetings.model");

function getAllGreetings(req, res, next){
    fetchAllGreetings().then((greetings) => {
      res.status(200).send({ greetings });
    });
  }
module.exports = { getAllGreetings };