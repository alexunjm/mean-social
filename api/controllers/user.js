'use strict'

var bcrypt = require('bcrypt-nodejs')

var User = require('../models/user');

var home = (req, res) => {
	res.status(200).send({
		status: 'ok',
		message: 'online'
	});
};

var test = (req, res) => {
	console.log(req.body);
	res.status(200).send({
		status: 'ok',
		message: 'acción de pruebas en el servidor NodeJS'
	});
};

var hasDefaultParams = params => {
	return 	params.name &&
			params.surname &&
			params.nickname &&
			params.email &&
			params.pass;
};

var saveUser = (req, res) => {
	var params = req.body;
	var user = new User();

	if (hasDefaultParams(params)) {

		user.name = params.name;
		user.surname = params.surname;
		user.nickname = params.nickname;
		user.email = params.email;
		user.role = 'ROLE_USER';
		user.image = null;

		User.find({ $or: [
			{ email: user.email.toLowerCase()},
			{ nickname: user.nickname.toLowerCase()}
		]}).exec((err, users) => {
			if (err) return res.status(500).send({ status: 'error', message: 'Error al guardar el usuario' })

			if(users && users.length) {
				return res.status(500).send({ status: 'error', message: 'Error al guardar el usuario: El usuario ya existe' })
			} else {

				bcrypt.hash(params.pass, null, null, (err, hash) => {
					user.pass = hash;
					user.save((err, userStored) => {
						if (err) return res.status(500).send({ status: 'error', message: 'Error al guardar el usuario'})
		
						if(userStored) {
							res.status(200).send({user: userStored});
						} else {
							res.status(404).send({status: 'error', message: 'no se pudo registrar el usuario'});
						}
					});
				});
			}
		})

	} else {

		res.status(200).send({
			status: 'error',
			message: 'Debes enviar todos los campos necesarios'
		});
	}

};

module.exports = {
	home,
	test,
	saveUser
}