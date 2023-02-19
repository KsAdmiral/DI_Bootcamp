CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL, 
    date_birth DATE NOT NULL
)

SELECT * FROM students

-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
INSERT INTO students (first_name, last_name, date_birth) VALUES ('Marc', 'Benichou', '1998-11-02'), ('Yoan', 'Cohen', '2010-12-03'), 
('Lea', 'Benichou', '1987-07-27'), ('Amelia', 'Dux', '1996-04-07'), ('David', 'Grez', '2003-06-14'), 
('Omer', 'Simpson', '1980-10-03'), ('Niv', 'Lugasi', '1994-09-17')
-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id = 2
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT * FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT * FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou'
-- Fetch the students whose first_names contain the letter a.
SELECT * FROM students WHERE first_name ILIKE '%a%'
-- Fetch the students whose first_names start with the letter a.
SELECT * FROM students WHERE first_name ILIKE 'a%'
-- Fetch the students whose first_names end with the letter a.
SELECT * FROM students WHERE first_name ILIKE '%a'
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT * FROM students WHERE (RIGHT(first_name, 2)ILIKE 'a%')
-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT * FROM students WHERE id = 1 AND id = 3
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE date_birth >= '2000-01-01'
