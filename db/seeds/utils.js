function insertData(table, data) {
    const values = data.map(item => `('${item.english}', '${item.maltese}')`).join(', ');
    const query = `INSERT INTO ${table} (english, maltese) VALUES ${values};`;
    return pool.query(query);
  }

 