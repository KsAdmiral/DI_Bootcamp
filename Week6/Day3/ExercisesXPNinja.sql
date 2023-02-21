-- Exercise 1 : DVD Rentals
-- Instructions
-- We want to encourage families and kids to enjoy our movies.
-- Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).
SELECT film.title, film.rating
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE (rental.return_date IS NOT NULL) 
AND film.rating IN ('G', 'PG')
-- Create a new table which will represent a waiting list for children’s movies. This will allow a child to add their name to the list until the DVD is available (has been returned). Once the child takes the DVD, their name should be removed from the waiting list (ideally using triggers, but we have not learned about them yet. Let’s assume that our Python program will manage this). Which table references should be included?
CREATE TABLE waiting_list (
    waiting_list_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customer(customer_id),
    film_id INT REFERENCES film(film_id)
);
-- Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.
SELECT film.title, COUNT(waiting_list.waiting_list_id) AS waiting_count
FROM film
JOIN waiting_list ON film.film_id = waiting_list.film_id
GROUP BY film.title;

INSERT INTO waiting_list (customer_id, film_id) VALUES (1, 10), (2, 10), (3, 11), (4, 12), (5, 12);

