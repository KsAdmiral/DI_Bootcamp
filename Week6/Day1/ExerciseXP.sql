CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL 
)

SELECT * FROM items
SELECT * FROM customers

INSERT INTO items (name, price) VALUES ('Small Desk', 100), ('Large desk', 300), ('Fan', 80)

INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), 
					  ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson')
					  
-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80
-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers WHERE last_name ILIKE 'Smith';
-- All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name ILIKE 'Jones';
-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE first_name!= 'Scott';
