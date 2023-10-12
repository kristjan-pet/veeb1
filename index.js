const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	//res.send('It works!');
	//res.download('index.js');
	res.render('index');
});

app.get('/test', (req, res)=>{
	res.send('Woohoo!');
	//res.download('index.js');
});

app.listen(5113);