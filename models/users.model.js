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
function addUser(username, name, password) {
  return db.query(`INSERT INTO users (username, name, password, saved_words) VALUES ($1, $2, $3, ARRAY[]::text[]) RETURNING *;`, [username, name, password]).then(({ rows }) => {
    return rows[0];
  });
}

function removeUser(username) {
  return db.query(`DELETE FROM users WHERE username = $1;`, [username]).then(({ rows }) => {
    return rows[0];
  });
}

module.exports = { fetchAllUsers, fetchUserByUsername, addUser, removeUser };