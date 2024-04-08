const db = require("../db/connection");
function fetchAllUsers() {
  return db.query(`SELECT * FROM users;`).then(({ rows }) => {
    return rows;
  });
}
function fetchUserByUsername(username) {
  return db.query(`SELECT * FROM users WHERE username = $1;`, [username]).then(({ rows }) => {
    return rows[0];
  });
}
module.exports = { fetchAllUsers, fetchUserByUsername };