const pool = require('../connection');
const { greetingData, animalData, fruitVegData } = require('../data/development-data/index');

function insertData(table, data) {
    const values = data.map(item => `('${item.english}', '${item.maltese}')`).join(', ');
    const query = `INSERT INTO ${table} (english, maltese) VALUES ${values};`;
    return pool.query(query);
  }

const seed = ({greetingData, animalData, fruitVegData}) => {
    return pool
    .query(`DROP TABLE IF EXISTS greetings;`)
    .then(() => {
      return pool.query(`CREATE TABLE greetings (english TEXT, maltese TEXT);`);
    }).then(() => {
      return insertData('greetings', greetingData);
    }).then(() => {
      return pool.query(`DROP TABLE IF EXISTS animals;`);
    }).then(() => {
      return pool.query(`CREATE TABLE animals (english TEXT, maltese TEXT);`);
    }).then(() => {
      return insertData('animals', animalData);
    }).then(() => {
      return pool.query(`DROP TABLE IF EXISTS fruit_veg;`);
    }).then(() => {
      return pool.query(`CREATE TABLE fruit_veg (english TEXT, maltese TEXT);`);
    }).then(() => {
      return insertData('fruit_veg', fruitVegData);
    });
}

module.exports = seed;