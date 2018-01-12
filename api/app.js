'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors

//rutas
app.get('/', (req, res) => {
	res.status(200).send({
		status: 'ok',
		message: 'online'
	});
});
app.post('/test', (req, res) => {
	console.log(req.body);
	res.status(200).send({
		status: 'ok',
		message: 'acción de pruebas en el servidor NodeJS'
	});
});

//exportar
module.exports = app;