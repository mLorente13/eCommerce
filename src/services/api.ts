const url = 'https://shoes-collections.p.rapidapi.com/shoes/3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
	}
};

export const fetchShoes = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log("jkfldasfjkds");
    
    return data;
};
