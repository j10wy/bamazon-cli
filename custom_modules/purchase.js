const colors = require('colors');

function Purchase(item_id, productsArray) {
	this.item = parseInt(item_id);
	this.productsArray = productsArray;
}

// @todo Comment code for validate method.
Purchase.prototype.validate = function validate() {
	if (isNaN(this.item)) {
		console.log("\n\nItem is a NOT number. Please enter a valid ID number\n".red);
		return false;
	} else {
		var valid_product_id = false;
		this.productsArray.map((item, index) => {
			if (this.item === item.item_id) {
				valid_product_id = true;
			}
		});
		if (valid_product_id) {
			return true;
		} else {
			console.log("\n\nItem is a valid ID number. Please try again.\n".red);
			return false;
		}
	}
}

// @todo finish Quantity Constructor.
function Quantity(num_to_purchase) {
	console.log(`\nNumber of items to purchase: ${num_to_purchase}`);
	return true;
}


module.exports = {
	Purchase: Purchase,
	Quantity: Quantity
}