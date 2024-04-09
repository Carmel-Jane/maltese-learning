const db = require("../db/connection");
const bcrypt = require('bcrypt');
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
 
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  return db.query(`INSERT INTO users (username, name, password, saved_words) VALUES ($1, $2, $3, ARRAY[]::text[]) RETURNING *;`, [username, name, hashedPassword]).then(({ rows }) => {
    return rows[0];
  });
}
function loginUser(username, password) {
  return db.query('SELECT * FROM users WHERE username = $1', [username]).then(({ rows }) => {
    if (rows.length === 0) {
      throw new Error('Invalid username or password');
    }
    const user = rows[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      throw new Error('Invalid username or password');
    }
    return user;
  });
}

function removeUser(username) {
  return db.query(`DELETE FROM users WHERE username = $1;`, [username]).then(({ rows }) => {
    return rows[0];
  });
}

module.exports = { fetchAllUsers, fetchUserByUsername, addUser, removeUser, loginUser };