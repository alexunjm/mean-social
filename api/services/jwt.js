'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_que_solo_conoce_el_dev'

exports.createToken = (user) => {
	var payload = {
		sub: user.id, //identificador de documento
		name: user.name,
		surname: user.surname,
		email: user.email,
		role: user.role,
		image: user.image,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix()
	};

	return jwt.encode(payload, secret);
};