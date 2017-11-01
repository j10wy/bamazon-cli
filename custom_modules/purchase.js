function purchase (item_id) {
	let item = new Number(item_id);
	console.log("\nThe item:",item);
	if (isNaN(item)){
		console.log("\nItem is a NOT number");
		return false;
	} else {
		console.log("\nItem is a number");
		return false;
	}
}

module.exports = purchase;