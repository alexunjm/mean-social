'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var port_api = 3800;

var db_port = 27017;
var db = 'curso_mean_social';
var url = `mongodb://localhost:${db_port}/${db}`;

mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true}).then(() => {
	console.log(`La conexión a la base de datos '${db}' por el puerto ${db_port} se ha establecido correctamente!!`);
	
	//crear servidor
	app.listen(port_api, () => {
		console.log(`Servidor corriendo en puerto http://localhost:${port_api}`)
	});
}).catch(err => console.error(err));