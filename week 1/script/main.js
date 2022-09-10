import emojiGenerator, { emojiGeneratorShorter } from "./generator"

import selectors from "./selectors"
selectors();

import getData from "./fetch";
getData();

const emoji = emojiGeneratorShorter('fox');
console.log(emoji);

const unicorn = function () {
	console.log(this)
}

function dog() {
	console.log(this)
}

const cat = () => {
	console.log(this)
}

const data = {
	name: 'Bootcamp',
	number: 140,
	team: 'Kodluyoruz'
}

function classroom(name, number = 1, ...params) {
	console.log(params)
	return name;
}

const result = classroom(data.name, '🦊', '🦖');
console.log(result);