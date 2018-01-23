'use strict'

var express = require('express');

var UserController = require('../controllers/user');
var md_auth = require('../middlewares/authentication');

var api = express.Router();

api.get('/home', UserController.home);
api.get('/test', md_auth.ensureAuth, UserController.test);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;