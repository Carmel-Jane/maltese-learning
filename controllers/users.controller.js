const {fetchAllUsers} = require("../models/users.model");

function getAllUsers(req, res, next){
    fetchAllUsers().then((users) => {
      res.status(200).send({ users });
    });
  };

module.exports = { getAllUsers };