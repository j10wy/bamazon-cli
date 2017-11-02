const colors = require('colors');

function purchase (item_id) {
	let item = new Number(item_id);

	if (isNaN(item)){
		console.log("\n\nItem is a NOT number. Please enter a valid ID number\n".red);	
		return false;
	}
	
	else {
		// @todo entry must be a valid ID.
		return true;
	}
}

function quantity(num_to_purchase) {
	console.log(`\nNumber of items to purchase: ${num_to_purchase}`);
	return true;
}

module.exports = {
	purchase: purchase,
	quantity:quantity
}