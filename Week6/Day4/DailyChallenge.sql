-- Instructions
-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.
-- Create a function that returns the total price for a given order.
-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE product_order_items (
    order_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (order_id, item_id),
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items(item_id) ON DELETE CASCADE
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE FUNCTION calculate_order_total(order_id INTEGER) RETURNS DECIMAL(10,2) AS $$
    DECLARE
        total DECIMAL(10,2) := 0;
    BEGIN
        SELECT SUM(price * quantity)
        INTO total
        FROM items
        JOIN product_order_items ON items.item_id = product_order_items.item_id
        WHERE order_id = $1;
        
        RETURN total;
    END;
$$ LANGUAGE plpgsql;

CREATE FUNCTION calculate_user_order_total(user_id INTEGER, order_id INTEGER) RETURNS DECIMAL(10,2) AS $$
    DECLARE
        total DECIMAL(10,2) := 0;
    BEGIN
        SELECT SUM(price * quantity)
        INTO total
        FROM items
        JOIN product_order_items ON items.item_id = product_order_items.item_id
        JOIN product_orders ON product_order_items.order_id = product_orders.order_id
        WHERE product_orders.user_id = user_id AND product_orders.order_id = order_id;
        
        RETURN total;
    END;
$$ LANGUAGE plpgsql;
