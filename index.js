// Require mysql module
const mysql = require('mysql');
const inquirer = require('inquirer');

const qInsert = require('./custom_modules/insert');
const qSelect = require('./custom_modules/select');
const [nodePath, filePath, product_name, department_name, price, stock_quantity] = process.argv;

// Create a connection to the bamazon database
const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon'
});

// const qInsert = require('./custom_modules/insert');
const qInsert = require('./custom_modules/insert');

dbConnection.end();