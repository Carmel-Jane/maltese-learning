const apiRouter= require("express").Router();
const getAllEndpoints = require("../controllers/api.controller");
const usersRouter = require("./users.router");

apiRouter.get("/", getAllEndpoints);

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;