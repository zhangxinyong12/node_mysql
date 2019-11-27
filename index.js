const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '47.105.105.165',
    user: 'zhang',
    password: 'zhang123',
    database: 'mysql'
});
connection.connect();

const addSql = ``;
const sql = `SELECT * FROM websites`;

connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});