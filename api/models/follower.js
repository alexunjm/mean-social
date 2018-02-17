'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowerSchema = Schema({
	user_id: { type: Schema.ObjectId, ref: 'User' },
	followed_user_id: { type: Schema.ObjectId, ref: 'User' },
	created_at: String
});

module.exports = mongoose.model('Follower', FollowerSchema);