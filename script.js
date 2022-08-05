let str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
	let arrayOfStrings = str.split(' ');
	arrayOfStrings = arrayOfStrings.map((str) => {
		return str.replace(str[0], str[0].toUpperCase());
	});
	let result = arrayOfStrings.join(' ');
	return result;
};

console.log(str.toJadenCase());
