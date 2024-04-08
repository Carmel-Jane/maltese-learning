const { getAllUsers, getUserByUsername, postUser, deleteUser } = require("../controllers/users.controller");

const usersRouter = require('express').Router()
usersRouter.route("/").get(getAllUsers);
usersRouter.route("/:username").get(getUserByUsername);
usersRouter.route("/").post(postUser);
usersRouter.route("/:username").delete(deleteUser);

module.exports = usersRouter;