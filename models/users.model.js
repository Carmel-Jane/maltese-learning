const db = require("../db/connection");
function fetchALlUsers() {
  return db.query(`SELECT * FROM users;`).then(({ rows }) => {
    return rows;
  });
}

module.exports = { fetchALlUsers };