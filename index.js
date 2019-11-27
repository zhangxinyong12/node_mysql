const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '47.105.105.165',
    user: 'zhang',
    password: 'zhang123',
    database: 'mysql'
});
connection.connect();

// 新增
const addSql = `INSERT INTO websites (Id, name, url, alexa, country) VALUES (0,?,?,?,?)`;
const addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
connection.query(addSql, addSqlParams, (error, result) => {
    if (error) throw error;
    console.log('add', result);
});

// 修改
const modSql = `UPDATE websites SET name = ?, url = ? WHERE Id = ?`;
const modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
// connection.query(modSql, modSqlParams, (err, result) => {
//     console.log('update', result.affectedRows);
// });

// 删除
const delSql = `DELETE FROM websites where id = 7`;
// connection.query(delSql, (err, result) => {
//     console.log('delete', result);
// });

// 查询
const sql = `SELECT * FROM websites`;
connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 关闭
connection.end();