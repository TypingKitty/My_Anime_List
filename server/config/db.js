const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'QWEmnb&098',
    database: 'project_db'
})

module.exports = db;