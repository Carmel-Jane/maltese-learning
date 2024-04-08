const {fetchAllUsers, fetchUserByUsername} = require("../models/users.model");

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
module.exports = { getAllUsers, getUserByUsername };