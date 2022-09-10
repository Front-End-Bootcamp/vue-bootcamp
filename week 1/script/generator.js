const emojiIndex = [
	{
		name: 'ghost',
		emoji: '👻',
	},
	{
		name: 'unicorn',
		emoji: '🦄',
	},
	{
		name: 'game',
		emoji: '👾',
	},
	{
		name: 'fox',
		emoji: '🦊',
	}
]

export const emojiGeneratorShorter = (name) => {
	if (name === '') return `emojiGeneratorShorter: 👾`;

	let findNameIndex = emojiIndex.findIndex(item => item.name === name);

	if (findNameIndex < 0) return `emojiGeneratorShorter: 🦖`;

	return `emojiGeneratorShorter: ` + emojiIndex[findNameIndex]?.emoji;
}

const emojiGenerator = (name) => {

	// name == 'ghost' ? '👻' : name == 'unicorn' ? '🦄' : '';

	if (name == 'ghost') {
		console.log('ghost', '👻');

		return '👻';

	} else if (name == 'unicorn') {
		console.log('unicorn', '🦄');

		return '🦄';

	} else if (name != 'unicorn' && name != 'ghost') {
		console.log('unicorn && ghost', '🦖');

		return '🦖';

	} else if (name == '') {
		console.log('empty', '👾');

		return '👾';

	} else {
		console.log('else', '🦊');

		return '🦊'
	}

}

export default emojiGenerator