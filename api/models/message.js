import { Schema } from 'mongoose';

'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Schema;

var MessageSquema = Squema({
	emmiter_user_id: { type: Schema.ObjectId, ref: 'User' },
	receiver_user_id: { type: Schema.ObjectId, ref: 'User' },
	text: String,
	created_at: String
});

module.exports = mongoose.model('Message', MessageSquema);