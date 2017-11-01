const mysql = require('mysql')
const inquirer = require('inquirer');

const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon'
});

dbConnection.query('SELECT * FROM products', function (error, results) {
	if (error) {
		throw error;
	}
	results.map(item => {
		console.log(`Item ID: ${item.item_id} | Name: ${item.product_name} | Price: $${item.price}`);
	});
	inquirer.prompt([{
		type: 'input',
		name: 'item_to_purchase',
		message: 'Enter the ID of the product you would like to purchase.'
	}]).then(function inqAnswers(answers) {
		console.log(answers);
		dbConnection.end();
	});
});