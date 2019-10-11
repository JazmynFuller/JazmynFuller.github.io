const express = require('express'); //telling us we want to use express
const app = express(); // gives us access to the app obkect, which is how we are going to contorl the webserver
const port = 3000; // port number we're running our webserver on. React runs on 3000 so we'll probably have to change this to 3001


// Route Handler
//app.METHOD(URL, ROUTE_HANDLER)

// '/' means root

app.get('/', (req, res) => { //this takes in a request, and a result that we're going to send back to the handler
	res.send('<h1>Hello World!</h1>');
});

app.get('/ctp', (req,res) => {
	res.send('This is the CTP page');
});

app.get('/zip/:zipcode', (req, res) => {
	const zip = req.params.zipCode;
	const sort = req.query.sort;
	res.send(`The zipcode is: ${ zip } and sort is: ${sort}`);
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});

