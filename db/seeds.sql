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