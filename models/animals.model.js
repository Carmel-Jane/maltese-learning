const db = require("../db/connection");

function fetchAllAnimals() {
  return db.query(`SELECT * FROM animals;`).then(({ rows }) => {
    return rows;
  });
}

module.exports = { fetchAllAnimals };