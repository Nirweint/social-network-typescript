// 1
function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + "...";
	} else {
		return str;
	}
}

truncateString("A a A green and yellow basket", 8);

// 2
function findElement(arr, func) {
	return arr.find(item => func(item));
}


findElement([1, 2, 3, 4], num => num % 2 === 0);

// 3
function booWho(bool) {
	return typeof(bool) == "boolean";
}

booWho(null);

// 4
function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}

titleCase("I'm a little tea pot");

// 5
let dog = {
	name: "pasha",
	numLegs: 4,
};