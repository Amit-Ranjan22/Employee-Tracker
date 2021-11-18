# 🕵️ Employee-Tracker

## ✍️ User Story

---

```
As a business owner
I WANT:  to be able to view and manage
         the departments, roles, and employees in my company
SO THAT: I can organize and plan my
         business.
```

---

## 🤝 Acceptance Criteria

---

```
GIVEN a command-line application that  accepts user input
WHEN: I start the application
THEN: I am presented with the following
      options: view all departments,
      view all roles, view all employees, add a department, add a role,
      add an employee, and update an employee role.
WHEN: I choose to view all departments
THEN: I am presented with a formatted
      table showing department names and department ids.
WHEN: I choose to view all roles
THEN: I am presented with the job title,
      role id, the department that role belongs to, and the salary for that role.
WHEN: I choose to view all employees
THEN: I am presented with a formatted table showing employee data,
      including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
WHEN: I choose to add a department
THEN: I am prompted to enter the name of the department and that
      department is added to the database.
WHEN: I choose to add a role
THEN: I am prompted to enter the name, salary, and department for the
      role and that role is added to the database.
WHEN: I choose to add an employee
THEN: I am prompted to enter the employee’s first name, last name, role,
      and manager, and that employee is added to the database.
WHEN: I choose to update an employee role
THEN: I am prompted to select an employee to update and their new role
      and this information is updated in the database.

```

---

## 🖼️ Mock-Up

---

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

---

## 🏃‍♂️ Getting Started

---

Use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates,the schema should contain the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(30)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(30)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(30)` to hold employee first name

  - `last_name`: `VARCHAR(30)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

---

## 🙋 Added Functionality

---

Some additional functionality is added to the application, such as the ability to do the following:

- Update employee managers.

- View employees by manager.

- View employees by department.

- Delete departments, roles, and employees.

- View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

---

## 💾 Installation & Usage

---

To install this application, clone the repository to your local directory by using following command:

- https://github.com/Amit-Ranjan22/Employee-Tracker.git

Once downloaded, you can install its dependencies by navigating to the Employee-Tracker directory on your local machine and issuing the following command:

- npm install

This command will install the following dependencies:

- console.table
- mysql2
- inquirer

---

## 🧪 Tests

---

```
There are no test used for this application.
```

---

## 🖼️ Gif showing functionality of the application

---

![Employee-Tracker-Gif](assets/Employee-tracker-Gif.gif)

---

## 🔌 Link to the video walk-through of the application

---

- Google-Drive Link: [Employee-Tracker](https://drive.google.com/file/d/1hOi69mCsdODGOCEAvO48hb9JELP3OCwc/view?usp=sharing)

---

## 🔌 Link to the Git-Hub repository

---

- GitHub Link: [
  Employee-Tracker](https://github.com/Amit-Ranjan22/Employee-Tracker.git)

---

<h2 id='contribution'>🧑‍🤝‍🧑 Contribution</h2>

    Amitabh Ranjan

---

<h2 id='questions'>❓ Questions</h2>

<h3>For any question you can reach me at:</h3>

---

<h3>😺GitHub: <a href='https://github.com/Amit-Ranjan22'>Amit-Ranjan22</a></h3>

<h3>📩 Email: <a href='https://mail.google.com/'>amitabh.march22@gmail</a></h3>

---

## ©️ License & Copyright

Licensed under the [MIT License](License-Copyright/LICENSE).
