function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('parameters must be numbers');
	}
	return a + b;
}

function myRemove(arr, item) {
	let newArr = [];
	for (let index = 0; index < arr.length; index += 1) {
		if (item !== arr[index]) {
			newArr.push(arr[index]);
		}
	}
	return newArr;
}

function myFizzBuzz(num) {
	if (typeof num !== 'number') return false;
	if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
	if (num % 3 === 0) return 'fizz';
	if (num % 5 === 0) return 'buzz';
	return num;
}

function mapString(objectMap, string) {
	const splitString = string.split('');
	const mappedArray = [];

	for (let index = 0; index < splitString.length; index += 1) {
		const character = splitString[index];
		const mappedValue = objectMap[character];
		if (mappedValue) {
			mappedArray.push(mappedValue);
		} else {
			mappedArray.push(character);
		}
	}
	return mappedArray.join('');
}

function encode(string) {
	const map = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5,
	};
	return mapString(map, string);
}

function decode(string) {
	const map = {
		1: 'a',
		2: 'e',
		3: 'i',
		4: 'o',
		5: 'u',
	};
	return mapString(map, string);
}

function techList(array, nome) {
	const sortedArray = array.sort();
	const result = [];
	if (array.length === 0) {
		return 'Vazio!';
	} else {
		const obj = {};
		for (let i = 0; i < sortedArray.length; i += 1) {
			const newObj = {};
			newObj['tech'] = sortedArray[i];
			newObj['name'] = nome;
			result.push(newObj);
		}
		return result;
	}
}

function hydrate(drink) {
	const array = drink.split(' ');
	let water = 0;
	for(let x = 0; x < array.length; x += 1) {
		const parseNum = parseInt(array[x]);
		if (parseNum) {
			water += parseNum;
		}
	}
	let cup = 'copo';
	if (water > 1) {
		cup = 'copos';
	}
	return `${water} ${cup} de água`;
}

module.exports = { sum, myRemove, myFizzBuzz, mapString, encode, decode, techList, hydrate };
