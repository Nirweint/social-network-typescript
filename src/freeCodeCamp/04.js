function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}

titleCase("I'm a little tea pot");

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.