// Require MySQL and Inquirer
const mysql = require('mysql')
const inquirer = require('inquirer');

// Require custom modules
// @todo import methids instead of single function. Create methods for quantity and purchase
let {purchase, quantity} = require('./custom_modules/purchase');

// Make a connection to the database
const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon'
});

// Create the inital query to the products table
dbConnection.query('SELECT * FROM products', function (error, results) {
	// Throw an error if the database cannot be queried. 
	if (error) {
		throw error;
	}
	//Initialize the products array this will be passed Inquirer to validate
	var productsArray = results;

	productsArray.map(item => {
		console.log(`Item ID: ${item.item_id} | Name: ${item.product_name} | Price: $${item.price}`);
	});
	inquirer.prompt([{
		type: 'input',
		name: 'item_to_purchase',
		message: 'Enter the ID of the product you would like to purchase:',
		validate: purchase
	}, {
		type: 'input',
		name: 'item_quantity',
		message: 'How many would you would like to purchase?',
		validate: quantity
	}]).then(function inqAnswers(answers) {
		console.log(answers);
		dbConnection.end();
	});
});