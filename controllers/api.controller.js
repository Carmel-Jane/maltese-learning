const endpoints = require("../endpoints.json");

function getAllEndpoints(req, res, next){
    res.send(endpoints);
};

module.exports = getAllEndpoints