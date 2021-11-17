const inquirer = require('inquirer');
const {promptUser} = require('../index');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CodingisCool@2021',
    database: 'employees'
});

const TotalBudgetByDep = () => {
    connection.query(`SELECT * FROM department`,
        function(err, results) {
            if (err) {
                console.log(err.message);
                return;
            }
            depArr = [];
            results.forEach(item => depArr.push(item.name))

            inquirer
                .prompt({
                    type: 'list',
                    name: 'dep_choice',
                    message: 'Please select a department to see the total utilized money',
                    choices: depArr
                })
                .then((data) => {
                    let department_id;
                    for (let i = 0; i < depArr.length; i++) {
                        if (depArr[i] === data.dep_choice){
                            department_id = i + 1;
                        };
                    };
                });
        }
    )
}