const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CodingisCool@2021',
    database: 'employees'
});

const dropManager = () => {
    connection.query(
        `DROP TABLE IF EXISTS manager`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            console.log('')
        }
    )
};