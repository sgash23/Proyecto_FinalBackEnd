const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'd92e86df1bmsh96785a69b7fe8d0p1bc57ajsnfde612cbe285',
    'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
  },
  data: {
    from: 'en',
    to: 'es',
    q: 'Hello ! This the final proyect Sebastián Soto Backend Numen'
  }
};

const myfunction = async () => {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

myfunction();