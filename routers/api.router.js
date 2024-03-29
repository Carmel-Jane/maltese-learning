const apiRouter= require("express").Router();
const getAllEndpoints = require("../controllers/api.controller");

apiRouter.get("/", getAllEndpoints);

module.exports = apiRouter;