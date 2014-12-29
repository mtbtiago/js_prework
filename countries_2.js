// Write a function that receives an object and returns an array of its values.
function foo(obj) {
	result = [];
	for(var key in obj) {
		result.push(obj[key]);
	}
	return result;
}

var country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

console.log(foo(country));