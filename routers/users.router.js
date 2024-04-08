const { getAllUsers, getUserByUsername, postUser } = require("../controllers/users.controller");

const usersRouter = require('express').Router()
usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:username").get(getUserByUsername);
usersRouter.route("/").post(postUser);

module.exports = usersRouter;