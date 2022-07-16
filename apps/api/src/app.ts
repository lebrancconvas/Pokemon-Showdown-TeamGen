import axios from 'axios';

const getAPI = async() => {
	try { 
		const response = await axios.get("https://pokeapi.co/api/v2/pokemon/charmander");
		const data = response.data;
		console.log(data);
	} catch(err) {
		console.error(err);
		console.log("== Get API Data Failed. ==");
	}
};

getAPI();