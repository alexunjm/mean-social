import { Schema } from 'mongoose';

'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Schema;

var FollowerSquema = Squema({
	user_id: { type: Schema.ObjectId, ref: 'User' },
	followed_user_id: { type: Schema.ObjectId, ref: 'User' },
	created_at: String
});

module.exports = mongoose.model('Follower', FollowerSquema);