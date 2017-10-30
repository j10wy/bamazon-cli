function qInsert(product_name, department_name, price, stock_quantity, dbObj) {
	var post = {
		product_name: product_name,
		department_name: department_name,
		price: price,
		stock_quantity: stock_quantity
	}
	// a connection can be implicitly established by invoking a query (no .connect()).
	dbObj.query('INSERT INTO products SET ?', post, function (error, results) {
		if (error) {
			throw error;
		}
		console.log("results:", results);

	});
}

module.exports = qInsert;