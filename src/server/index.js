//Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

doteven.config();

const app = express();
const port = 3000;

//Midleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

//Routes
app.get('/', (rew, res) => {
	res.sendFile('dist/index.html');
});

//Route to test API response
app.get('/test', (req, res) => {
	res.send(mockAPIResponse);
});

app.post('/api', async (req, res) => {
	const {url} = req.body;
	
	try {
		const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json',
			},
			body: JSON.stringify({
				key: process.env.API_KEY,
				url: url,
				lang: 'en',
			}),
		});
		
		const data = await response.json();
		res.send(data);
	}   catch (error) {
		console.error('Error:', error);
		res.ststus(500).send('Error Processing Request');
	}
});

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});