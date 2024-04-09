const db = require("../db/connection");

function fetchAllFruitVeg() {
  return db.query(`SELECT * FROM fruit_veg;`).then(({ rows }) => {
    return rows;
  });
}
module.exports = { fetchAllFruitVeg };