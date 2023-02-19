CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL, 
    date_birth DATE NOT NULL,
    number_oscars SMALLINT DEFAULT 0
)

-- select all columns from the table
SELECT * FROM actors;

SELECT COUNT (*) FROM actors;


-- SELECT first_name, last_name FROM actors;

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('George', 'Clooney', '1999-01-08', 2);

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('Matt', 'Damon', '1987-01-22', '3');

INSERT INTO actors (first_name, last_name, date_birth)
VALUES ('Jenifer', 'Aniston', '1987-01-22');

--condition
SELECT * FROM actors WHERE number_oscars >= 2;

-- select all the columns where nb > 2 and last name start with the D case INSENSITIVE
SELECT * FROM actors WHERE number_oscars >= 2 AND last_name ILIKE 'd%';

-- select only the actors that are born in 1987
SELECT * FROM actors WHERE EXTRACT(YEAR from date_birth) = 1987;

SELECT first_name, last_name, EXTRACT(YEAR from age(date_birth)) FROM actors;

SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars ASC;

SELECT * FROM actors LIMIT 2;

-- the actor that has the maximum number of oscars
SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars DESC LIMIT 1;

-- Add two more female actors in the table actors. Add them one by one
INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('Jennifer', 'Lawrence', '1990-08-26');
INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('Emma', 'Watson', '1990-04-15', 1);
-- Add three more actors, add all of them in one query !
INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES ('Tom', 'Hanks', '1956-07-09', 5), 
('Leonardo', 'DiCaprio', '1974-11-11', 7), 
('Morgan', 'Freeman', '1937-05-1', 5)
-- The first 4 actors
SELECT * FROM actors LIMIT 4
-- The first 4 actors ordered in descending order of the last_name (ie. sorted DESCENDING by the "last_name" column))
SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- The actors that have the letter 'e' in their first_name
SELECT * FROM actors WHERE first_name ILIKE '%e%';
-- The actors that got at least 5 oscars
SELECT * FROM actors WHERE number_oscars >= 5;
