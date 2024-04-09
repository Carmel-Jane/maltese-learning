const {getAllGreetings} = require("../controllers/greetings.controller");

const greetingsRouter = require('express').Router()
greetingsRouter.route("/").get(getAllGreetings);

module.exports = greetingsRouter;