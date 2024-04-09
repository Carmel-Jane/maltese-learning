const apiRouter= require("express").Router();
const getAllEndpoints = require("../controllers/api.controller");
const usersRouter = require("./users.router");
const animalsRouter = require("./animals.router");

apiRouter.get("/", getAllEndpoints);

apiRouter.use("/users", usersRouter);
apiRouter.use("/animals", animalsRouter);

module.exports = apiRouter;