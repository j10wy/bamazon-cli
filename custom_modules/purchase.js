function purchase (item_id) {
	let item = new Number(item_id);

	if (isNaN(item)){
		console.log("\nItem is a NOT number. Please enter a valid ID number");
		return false;
	}
	
	else {
		console.log("\nItem is a number.");
		return true;
	}
}

function quantity(num_to_purchase) {
	console.log(`\nNumber of items to purchase: ${num_to_purchase}`);
}

module.exports = {
	purchase: purchase,
	quantity:quantity
}