// 1
function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8
	} else {
		return number * 9
	}
}
simpleMultiplication(2)

// 2
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - (sonYearsOld*2));
}

twiceAsOld(30, 10)

// 3
function even_or_odd(number) {
	return (number % 2 === 0) ? "Even" : "Odd";
}

even_or_odd(2)

// 4
function booleanToString(b){
	return b.toString();
}

booleanToString(true)

// 5
function missingNo(nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	let ans = sortedNums.findIndex((item, index) => {
		if (item !== index) {
			return true
		}
	})
	if (ans === -1) {
		return 100
	} else {
		return ans
	}
}

missingNo([0,1,2,5,6,3,4,3])

// 6
function distinct(a) {
	let newArray = [];
	a.forEach((item) => {
		if (!newArray.includes(item)) {
			newArray.push(item)
		}
	})
	return newArray;
}

distinct([1,4,5,6,6,7])

// 7
function usdCny(usd) {
	return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

usdCny(2)