INSERT INTO department (name)
VALUES ('Legal-Dep'),
       ('Sales-Dep'),
       ('Eng-Dep'),
       ('Manuf-Dep');

INSERT INTO roles (title,salary,department_id)
VALUES ('Legal_Team_Head', 185000, 1),
       ('Attorney', 150000, 1),
       ('Sales_Lead', 140000, 2),
       ('Sales_Person', 110000, 2),
       ('Chief_Engineer', 130000, 3),
       ('Junior_Engineer', 112000, 3),
       ('Plant_Manager', 161000, 4),
       ('Assembly_Supervisor', 70000, 4);

INSERT INTO employee (first_name,last_name,role_id,manager_id,confirm_manager)
VALUES ('Tom', 'hanks', 1, null, true),
       ('leonardo', 'Decaprio', 2, 1, false),
       ('Scarlett', 'Johansson', 2, 1, false),
       ('WIll', 'Smith', 3, null, true),
       ('Tom', 'Cruise', 4, 2, false),
       ('Johnny', 'Depp', 4, 2, false),
       ('Robert', 'Downey', 4, 2, false),
       ('Dwayne', 'Johnson', 5, null, true),
       ('Brad', 'Pitt', 6, 3, false),
       ('Samuel', 'Jackson', 6, 3, false),
       ('Denzel', 'Washington', 7, null, true),
       ('Morgan', 'Freeman', 7, 4, false);

INSERT INTO manager (first_name, last_name)
SELECT first_name,
       last_name
FROM employee
WHERE confirm_manager = 1;