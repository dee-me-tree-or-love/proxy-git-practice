module.exports = function() {
	let exercise = function(n) {
		n = n + "";
		return n.split("").reverse().join("");
	}
	console.log(exercise(123456));
	return 420;
}

module.exports()

require('./index')()