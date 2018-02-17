'use strict'

var express = require('express');
var FollowerController = require('../controllers/follower');
var api = express.Router();
var md_auth = require('../middlewares/authentication');

api.get('/pruebas-follow', md_auth.ensureAuth, FollowerController.prueba);

module.exports = api;