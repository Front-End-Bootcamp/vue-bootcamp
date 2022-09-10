import axios from "axios";

const BaseURL = `https://randomfox.ca/floof/`

const getData = async () => {
	const result = await fetch(`${BaseURL}`).then(data => data.json()).then(response => response);
	console.log(result.image);

	const resultAxios = await axios(BaseURL).then(response => response);
	console.log(resultAxios.data.image)
}

export default getData