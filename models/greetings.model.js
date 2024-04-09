const db = require("../db/connection");

function fetchAllGreetings() {
  return db.query(`SELECT * FROM greetings;`).then(({ rows }) => {
    return rows;
  });
}

module.exports = { fetchAllGreetings };