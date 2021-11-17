const inquirer = require('inquirer');

const promptUser = () => {
    inquirer
    .prompt({
        type: 'list',
        name: 'begin choices',
        message: 'What do you like to do? (select one of the following options)',
        choices: [
                'View All Employees',
                'View All Employees By Department',
                'View All Employee By Manger',
                'View Departments',
                'View Roles',
                'View Total Budget',
                'Add Employee',
                'Update Employee Role',
                'Add Department',
                'Add Role',
                'Thanks! I am Done'
        ]
     })
     .then((data) => {

     });
};