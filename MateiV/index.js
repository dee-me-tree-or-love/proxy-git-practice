module.exports = function() {
  
  let exercise = function(n) {
	  n = n + "";
	return n.split("").reverse().join("");
  }
  
  let value = exercise(12345);
  let result = {"Matei Voicu": value};
  return result;
}