// https://dog.ceo/dog-api/documentation/

const randomNumber = (total) => Math.floor(Math.random() * total);

async function getAllBreeds() {
	const breeds = await fetch("https://dog.ceo/api/breeds/list/all")
		.then(data => data.json())
		.then(res => res);

	let result = Object.keys(breeds.message);
	return result;
}

async function getBreed(name) {
	const breedImages = await fetch(`https://dog.ceo/api/breed/${name}/images`)
		.then(data => data.json());

	let randomImage = randomNumber(breedImages.message.length);
	console.log(breedImages.message[randomImage]);
}

window.onload = async (event) => {
	let allBreeds = await getAllBreeds();
	let randomIndex = randomNumber(allBreeds.length);
	let randomBreed = allBreeds[randomIndex];

	getBreed(randomBreed);
};