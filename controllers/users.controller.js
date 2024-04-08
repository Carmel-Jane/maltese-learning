const {fetchAllUsers, fetchUserByUsername, addUser} = require("../models/users.model");

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
};
module.exports = { getAllUsers, getUserByUsername, postUser };