const { promptUser } = require('../index')
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CodingisCool@2021',
    database: 'employees'
});

const viewAllEmp = () => {
    connection.query(
        `SELECT employee.id, employee.first_name, employee.last_name, roles.title AS role, roles.salary AS salary, manager.first_name AS manager,
        department.name AS department 
        FROM employee
        LEFT JOIN roles
        ON employee.role_id = roles.id
        LEFT JOIN department
        ON roles.department_id = department.id
        LEFT JOIN manager
        ON employee.manager_id = manager.id`,

        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);

            promptUser();
        }
    );
};

const viewEmpByDep = () => {

    connection.query(

        `SELECT * FROM department`,

        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            depArr = [];

            results.forEach(item => {
                depArr.push(item.name)
            });
            inquirer
                .prompt({
                    type: 'list',
                    name: 'emp-dep-filter',
                    message: 'Choose a department to filter from:',
                    choices: depArr
                })
                .then((data) => {
                    connection.query(
                        `SELECT employee.id, employee.first_name, employee.last_name, department.name AS department 
                            FROM employee
                            LEFT JOIN roles
                            ON employee.role_id = roles.id
                            LEFT JOIN department
                            ON roles.department_id = department.id
                            WHERE department.name = ?`,
                        [data['emp-dep-filter']],
                        function (err, results, fields) {
                            if (err) {
                                console.log(err.message);
                                return;
                            }
                            console.table(results);
                            promptUser();
                        }
                    )
                });
        }
    );
}

const viewEmpByMgr = () => {
    connection.query(
        `SELECT * FROM manager`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            managerArr = [];
            results.forEach(item => {
                managerArr.push(item.first_name)
            });

            inquirer
                .prompt({
                    type: 'list',
                    name: 'manager-filter',
                    message: 'Choose a manager to filter from:',
                    choices: managerArr
                })
                .then((data) => {
                    connection.query(
                        `SELECT employee.id, employee.first_name, manager.first_name AS manager
                            FROM employee
                            LEFT JOIN manager
                            ON employee.manager_id = manager.id
                            WHERE manager.first_name = ?`,
                        [data['manager-filter']],
                        function (err, results, fields) {
                            if (err) {
                                console.log(err.message);
                                return;
                            }
                            console.table(results);
                            promptUser();
                        }
                    );
                });

        }
    );
}

const addEmp = () => {
    connection.query(
        `SELECT * FROM roles`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            let roleArr = [];
            results.forEach(item => {
                roleArr.push(item.title)
            })
            connection.query(
                `SELECT * FROM manager`,
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }

                    let manArr = [];

                    results.forEach(item => {
                        manArr.push(item.first_name)
                    });
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'first_name',
                                message: 'Please Enter first name of the employee: '
                            },
                            {
                                type: 'text',
                                name: 'last_name',
                                message: 'Please Enter last name of the employee: '
                            },
                            {
                                type: 'list',
                                name: 'role_pick',
                                message: 'What will be the role of the employee?',
                                choices: roleArr
                            },
                            {
                                type: 'confirm',
                                name: 'confirm_mgr',
                                message: 'Are you hiring the employee for manager position?'
                            },
                            {
                                type: 'list',
                                name: 'pick_mgr',
                                message: 'Who will be the manager of this employee?',
                                when: ({ confirm_mgr }) => {
                                    if (!confirm_mgr) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                },
                                choices: manArr
                            }
                        ])
                        .then((data) => {
                            let role_id;
                            for (i = 0; i < roleArr.length; i++) {
                                if (data.role_pick === roleArr[i]) {
                                    role_id = i + 1
                                }
                            }

                            let confirm_manager;
                            if (data.confirm_mgr === true) {
                                confirm_manager = 1;
                            } else {
                                confirm_manager = 0
                            }

                            let manager_id;

                            if (!data.pick_mgr) {
                                manager_id = null;
                            } else {
                                for (i = 0; i < manArr.length; i++) {
                                    if (data.pick_mgr === manArr[i]) {
                                        manager_id = i + 1
                                    }
                                }
                            }
                            connection.query(
                                `INSERT INTO employee (first_name, last_name, role_id, manager_id, confirm_manager)
                                    VALUES (?, ?, ?, ?, ?)`,
                                [data.first_name, data.last_name, role_id, manager_id, confirm_manager],
                                function (err, results, fields) {
                                    if (err) {
                                        console.log(err.message);
                                        return;
                                    }
                                    console.log('Employee successfully added!');
                                    promptUser();
                                }
                            );
                        });
                }
            );
        }
    );
}

const updateEmpRole = () => {
    // Select all roles from table for future ref
    connection.query(
        `SELECT * FROM roles`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            // Create empty array for storing info
            let roleArr = [];

            // for each item in the results array, push the name of the roles to the roles array
            results.forEach(item => {
                roleArr.push(item.title)
            })
            connection.query(
                `SELECT first_name, last_name FROM employee`,
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                    }

                    let nameArr = [];
                    results.forEach(item => {
                        nameArr.push(item.first_name);
                        nameArr.push(item.last_name);
                    })
                    let combinedNameArr = [];
                    for (let i = 0; i < nameArr.length; i += 2) {
                        if (!nameArr[i + 1])
                            break
                        combinedNameArr.push(`${nameArr[i]} ${nameArr[i + 1]}`)
                    }
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'name_select',
                                message: 'Please select an employee you would like to update',
                                choices: combinedNameArr
                            },
                            {
                                type: 'list',
                                name: 'role_select',
                                message: 'Please select a role you would like your employee to change to:',
                                choices: roleArr
                            }
                        ])
                        .then((data) => {
                            let role_id;
                            for (let i = 0; i < roleArr.length; i++) {
                                if (data.role_select === roleArr[i]) {
                                    role_id = i + 1;
                                }
                            };
                            let selectedNameArr = data.name_select.split(" ");
                            let last_name = selectedNameArr.pop();
                            let first_name = selectedNameArr[0];

                            connection.query(
                                `UPDATE employee 
                                        SET role_id = ?
                                        WHERE first_name = ? AND last_name = ?`,
                                [role_id, first_name, last_name],
                                function (err, results, fields) {
                                    if (err) {
                                        console.log(err.message);
                                        return;
                                    }
                                    console.log('Employee Role updated!');
                                    promptUser();
                                }
                            );
                        });
                }
            );

        }
    );
}

module.exports = {viewAllEmp, viewEmpByDep, viewEmpByMgr, addEmp, updateEmpRole}