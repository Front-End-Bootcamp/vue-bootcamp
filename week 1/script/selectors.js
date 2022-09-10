const selectors = () => {
	// const logo = document.querySelector(`#logo`);
	// const logo = document.querySelector(`.logo`);
	const logo = document.querySelector(`[data-logo]`);

	function onClickLogo(event) {
		console.log(`onClickLogo`, this);
		logo.removeEventListener('click', onClickLogo);
	}

	logo.addEventListener('click', event => {
		console.log(`arrow function`, this)
	});

	logo.addEventListener('click', function (event) {
		console.log(`function`, this);
	});

	logo.addEventListener('click', onClickLogo);
}

export default selectors