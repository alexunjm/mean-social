'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Schema;

var UserSquema = Squema({
	name: String,
	surname: String,
	nickname: String,
	email: String,
	pass: String,
	role: String,
	image: String
});

module.exports = mongoose.model('User', UserSquema);