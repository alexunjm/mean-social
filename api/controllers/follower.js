'use strict'

/* var path = require('path'); */
/* var fs = require('fs'); */
/* var mongoosePaginate = require('mongoose-pagination'); */

var user = require('../models/user');
var follower = require('../models/follower');

var prueba = (req, res) => {
	res.status(200).send({ status: 'ok', message: 'No existe la imagen' });
};

module.exports = {
	prueba
}