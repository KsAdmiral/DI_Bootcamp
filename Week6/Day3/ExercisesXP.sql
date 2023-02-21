-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all film languages.
SELECT name FROM language
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
SELECT title, description, name
FROM film 
INNER JOIN language 
ON film.language_id = language.language_id
-- Get all films, even if they don’t have languages.
SELECT title, description, name
FROM film 
LEFT JOIN language 
ON film.language_id = language.language_id
-- Get all languages, even if there are no films in those languages.
SELECT title, description, name
FROM film 
RIGHT JOIN language 
ON film.film_id = language.language_id
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
INSERT INTO new_film (name)
VALUES ('A'),('B'),('C'),('D')
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE ON UPDATE CASCADE,
  language_id INTEGER NOT NULL REFERENCES language(language_id) ON DELETE CASCADE ON UPDATE CASCADE,
  title VARCHAR(30) NOT NULL,
  score INT CHECK(score >= 1 AND score <= 10),
  review_text VARCHAR(10485760) NOT NULL,
  last_update DATE
);
SELECT * FROM new_film
SELECT * FROM customer_review
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1, 1, 'Amazing movie', 9, 'I really enjoyed this movie. The acting was great and the plot was well-written.', NOW()),
(2, 2, 'Classic film', 10, 'This is one of my favorite movies of all time. The performances are outstanding and the story is gripping.', NOW());
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;
-- review will also be deleted due to the ON DELETE CASCADE constraint

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title LIKE '%Amelie%';

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'German')
WHERE title LIKE '%Das Boot%';
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
The rental, address, store, and payment tables.This affects the way we INSERT into the customer table 
-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE IF EXISTS customer_review;
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, payment.amount 
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON rental.rental_id = payment.rental_id
WHERE rental.return_date IS NULL
GROUP BY film.title, payment.amount 
ORDER BY payment.amount DESC
LIMIT 30;
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND description ILIKE '%sumo%';
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title
FROM film
WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%';
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN payment ON rental.rental_id = payment.rental_id 
WHERE rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND rental.customer_id IN (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan')
AND payment.amount > 4.0
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT film.title, film.rental_rate, film.replacement_cost
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE (title ILIKE '%boat%' OR description ILIKE '%boat%')
AND rental.customer_id IN (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan')
AND replacement_cost > 19;


