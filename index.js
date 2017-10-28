// Require mysql module
const mysql = require('mysql');
const [nodePath, filePath, product_name, department_name, price, stock_quantity] = process.argv;

var post = {
	product_name: product_name,
	department_name: department_name,
	price: price,
	stock_quantity: stock_quantity
};

// Create a connection to the bamazon database
const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon'
});

// a connection can be implicitly established by invoking a query (no .connect()).
dbConnection.query('INSERT INTO products SET ?', post, function (error, results) {
	if (error) {
		throw error;
	}
	console.log("results:", results);
	dbConnection.end();
});