DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE table products (
item_id INTEGER(10) AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price  DECIMAL(13, 2) NOT NULL,
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Odyssey", "Video Games", 59.99, 200),
("Fallout 4 VR", "Video Games", 59.99, 0),
("Broforce", "Video Games", 19.99, 1000),
("Ruiner", "Video Games", 19.99, 500),
("Overwatch", "Video Games", 99.99, 10),
("Injustice 2", "Video Games", 59.99, 250),
("Star Wars Battlefront II", "Video Games", 99.99, 0),
("Titanfall 2", "Video Games", 29.99, 10),
("Mario Kart DX", "Video Games", 59.99, 10),
("Zelda: Breath of the Wild", "Video Games", 59.99, 300);