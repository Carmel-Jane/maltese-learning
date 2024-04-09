const apiRouter= require("express").Router();
const getAllEndpoints = require("../controllers/api.controller");
const usersRouter = require("./users.router");
const animalsRouter = require("./animals.router");
const greetingsRouter = require("./greetings.router");
const fruitVegRouter = require("./fruitveg.router");

apiRouter.get("/", getAllEndpoints);

apiRouter.use("/users", usersRouter);
apiRouter.use("/animals", animalsRouter);
apiRouter.use("/greetings", greetingsRouter);
apiRouter.use("/fruitveg", fruitVegRouter);


module.exports = apiRouter;