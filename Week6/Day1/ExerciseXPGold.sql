CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL, 
    date_birth DATE NOT NULL
)

SELECT * FROM students

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT * FROM students ORDER BY last_name ASC LIMIT 4
-- Fetch the details of the youngest student.
SELECT * FROM students ORDER BY date_birth DESC LIMIT 1
-- Fetch three students skipping the first two students.
SELECT * FROM students OFFSET 2 LIMIT 3