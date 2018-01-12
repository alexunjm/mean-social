import { Schema } from 'mongoose';

'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Schema;

var PostSquema = Squema({
	user_id: { type: Schema.ObjectId, ref: 'User' },
	text: String,
	file: String,
	created_at: String,
	updated_at: String
});

module.exports = mongoose.model('Post', PostSquema);