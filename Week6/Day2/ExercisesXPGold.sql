-- Exercise 1: DVD Rental
-- Instructions
-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT rating, COUNT(*) FROM film GROUP BY rating;
-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT title, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
AND length <= 120
AND rental_rate <= 3.00
ORDER BY title ASC;
-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE customer
SET first_name = 'Niv', last_name = 'Lugasi'
WHERE customer_id = 1;

UPDATE address
SET address = 'Hanesher', district = 'Netanya'
WHERE address_id = 5;

-- Exercise 2: Students Table
-- Instructions
-- Continuation of the Day1 Exercise XPGold : students table
-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
UPDATE students SET date_birth = '1998-02-11' WHERE first_name = 'Lea' OR first_name = 'Marc';
-- Change the last_name of David from ‘Grez’ to ‘Guez’.
UPDATE students SET last_name = 'Guez' WHERE first_name = 'David'
-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou'
-- Count
-- Count how many students are in the table.
SELECT COUNT(*) FROM students;
-- Count how many students were born after 1/01/2000.
SELECT COUNT(*) FROM students WHERE date_birth > '2000-01-01'
-- Insert / Alter
-- Add a column to the student table called math_grade.
ALTER TABLE students ADD COLUMN math_grade INTEGER;
-- Add 80 to the student which id is 1.
UPDATE students SET math_grade = 80 WHERE id = 1;
-- Add 90 to the students which have ids of 2 or 4.
UPDATE students SET math_grade = 90 WHERE id IN (2,4);
-- Add 40 to the student which id is 6.
UPDATE students SET math_grade = 40 WHERE id = 6;
-- Count how many students have a grade bigger than 83
SELECT COUNT(*) FROM students WHERE math_grade > 83;
SELECT * FROM students
-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
INSERT INTO students (first_name, last_name, date_birth, math_grade) VALUES ('Omer', 'Simpson', '1980-10-03', 70);
-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.
SELECT first_name, last_name, COUNT(math_grade) AS total_grade FROM students GROUP BY first_name, last_name;
-- SUM
-- Find the sum of all the students grades.
SELECT SUM(math_grade) FROM students;

-- Exercise 3 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.
-- Part I
-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column ref	erences the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer

-- Insert purchases for the customers, use subqueries:
-- Scott Scott bought one fan
-- Melanie Johnson bought ten large desks
-- Greg Jones bougth two small desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
  (SELECT item_id FROM items WHERE name = 'Fan'),
  1
),
(
  (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
  (SELECT item_id FROM items WHERE name = 'Large desk'),
  10
),
(
  (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
  (SELECT item_id FROM items WHERE name = 'Small Desk'),
  2
);
SELECT * FROM purchases
-- Part II
-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
SELECT * FROM purchases;
-- All purchases, joining with the customers table.
SELECT p.*, c.first_name, c.last_name 
FROM purchases p
JOIN customers c ON p.customer_id = c.id;
-- Purchases of the customer with the ID equal to 5.
SELECT * FROM purchases WHERE customer_id = 5;
-- Purchases for a large desk AND a small desk
SELECT * FROM purchases WHERE item_name IN ('large desk', 'small desk');
SELECT * FROM purchases
-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name
SELECT customers.first_name, customers.last_name, items.name
FROM customers 
JOIN purchases ON customers.id = purchases.customer_id
JOIN items ON items.item_id = purchases.item_id;
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
-- If set to NULL then allowed, if set to NOT NULL then not allowed