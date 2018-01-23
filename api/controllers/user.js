'use strict'

var bcrypt = require('bcrypt-nodejs')

var User = require('../models/user');
var jwt = require('../services/jwt');

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

var loginUser = (req, res) => {

	var params = req.body;
	var [email, pass] = [params.email, params.pass];

	User.findOne({email: email}, (err, user) => {
		if (err) return res.status(500).send({ status: 'error', message: 'El usuario no se pudo identificar' });

		if(user) {
			bcrypt.compare(pass, user.pass, (err, check) => {
				if(check) {
					
					if(params.getToken) {
						/** Devolver token */
						/** Generar token */
						return res.status(200).send({token: jwt.createToken(user)});
					} else {
						/** Devolvemos datos de usuario */
						user.pass = undefined;
						return res.status(200).send({user});
					}

				} else {
					return res.status(500).send({ status: 'error', message: 'El usuario no se pudo identificar'});
				}
			});
		} else {
			return res.status(500).send({ status: 'error', message: 'El usuario no se pudo identificar' });
		}
	});

}

module.exports = {
	home,
	test,
	saveUser,
	loginUser
}