CREATE DATABASE bamazon;

DROP TABLE IF EXISTS bamazon;

CREATE TABLE products (
	item_id INTEGER(20) AUTO_INCREMENT PRIMARY KEY,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price INTEGER(10) NOT NULL,
	stock_quantity INTEGER(10)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("Zelda: Breath of the Wild", "Videogames", 60, 100),
("MacBook Pro", "Computers", 2500, 99),
("SurfaceBook 4", "Computers", 2500, 50)