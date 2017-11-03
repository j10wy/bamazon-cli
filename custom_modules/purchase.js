const colors = require('colors');

function Purchase(item_id, bamazonObj) {
	this.item = parseInt(item_id);
	this.bamazon = bamazonObj;
	this.productsArray = this.bamazon.productsArray;
}

// @todo Comment code for validate method.
Purchase.prototype.validate = function () {
	if (isNaN(this.item)) {
		console.log("\n\nItem is a NOT number. Please enter a valid ID number\n".red);
		return false;
	} else {
		var valid_product_id = false;
		this.productsArray.map((item, index) => {
			if (this.item === item.item_id) {
				valid_product_id = true;
				this.bamazon.selectedItem = item;
				console.log(this.bamazon.selectedItem);
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

// @todo Store the slected item and all of its properties in the 
function Quantity(num_items, bamazonObj) {
	this.requestedQuantity = parseInt(num_items);
	this.bamazon = bamazonObj;
	// this.selectedItem = bamazonObj.selectedItem;
}

Quantity.prototype.validate = function () {
	console.log("baamazzzzonnn", this.bamazon)
	if (isNaN(this.requestedQuantity)) {
		console.log("\n\nrequestedQuantity is a NOT number. Please enter a number\n".red);
		return false;
	} else {
		// @todo finish Quantity Constructor.
	}

}


module.exports = {
	Purchase: Purchase,
	Quantity: Quantity
}