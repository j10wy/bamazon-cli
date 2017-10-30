function qSelect(dbObj) {
	// a connection can be implicitly established by invoking a query (no .connect()).
	dbObj.query('SELECT * FROM products', post, function (error, results) {
		if (error) {
			throw error;
		}
		console.log("results:", results);

	});
}

module.exports = qSelect;