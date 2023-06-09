const mysql = require('mysql2')
const fs = require('fs');

require('dotenv').config()

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: {
        ca: fs.readFileSync('./ssl_certificate/ca-certificate.crt')
    }
});

connection.connect((err) => {
    if(!err){
        console.log('Connected');
    }
    else {
        console.log(err)
    }
})


module.exports = connection;

