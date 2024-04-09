const {fetchAllUsers, fetchUserByUsername, addUser, removeUser, loginUser} = require("../models/users.model");
require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

function getAllUsers(req, res, next){
    fetchAllUsers().then((users) => {
      res.status(200).send({ users });
    });
  };
  function getUserByUsername(req, res, next){
    fetchUserByUsername(req.params.username).then((user) => {
      if (!user) {
        res.status(404).json({ msg: "404 Error. This page doesn't exist" });
      } else {
        res.status(200).send({ user });
      }
    }).catch(next); 
}
function postUser (req, res, next){
  const { username, name, password } = req.body;
  if (!username || !name || !password) {
    res.status(400).json({ msg: "400 Error. Bad request" });
  } else {
    addUser(username, name, password)
      .then(user => {
        res.status(201).json({ user });
      })
      .catch(next);
  }
}
function postLogin (req, res, next){
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ msg: "400 Error. Bad request" });
  } else {
    loginUser(username, password)
      .then(user => {
        const token = jwt.sign({ id: user.id }, secretKey);
        res.status(200).json({ token });
      })
      .catch(err => {
        if (err.message === 'Invalid username or password') {
          res.status(400).json({ msg: err.message });
        } else {
          next(err);
        }
      });
  }
}
function deleteUser (req, res, next){
  removeUser(req.params.username).then(() => {
    res.status(204).send();
  }).catch(next);
}
module.exports = { getAllUsers, getUserByUsername, postUser, deleteUser, postLogin };