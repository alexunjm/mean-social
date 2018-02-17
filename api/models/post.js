'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = Schema({
	user_id: { type: Schema.ObjectId, ref: 'User' },
	text: String,
	file: String,
	created_at: String,
	updated_at: String
});

module.exports = mongoose.model('Post', PostSchema);