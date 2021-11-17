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
         switch (data['begin choices']){
            case 'View All Employees':
                viewAllEmp();
                break;
            case 'View All Employees By Department':
                viewEmpByDep();
                break;
            case 'View All Employee By Manger':
                viewEmpByMgr();
                break;
            case 'View Departments':
                viewDep();
                break;
            case 'View Roles':
                viewRoles();
                break;
            case 'View Total Budget':
                TotalBudgetByDep();
                break;
            case 'Add Employee':
                addEmp();
                break;
            case 'Update Employee Role':
                updateEmpRole();
                break;
            case 'Add Department':
                addDep();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Thanks! I am Done':
                break;
        }

     });
};

module.exports = {promptUser};
const {viewAllEmp, viewEmpByDep, viewEmpByMgr, addEmp, updateEmpRole} = require('./lib/employee-methods');
const {viewDep, addDep} = require('./lib/department-methods');
const {viewRoles, addRole} = require('./lib/role-methods');
const {TotalBudgetByDep} = require('./lib/budget-calculation');

promptUser();