const exp = require('express');

const auth_control = require('../control/auth_control');

const route = exp.Router();

route.post('/signup', auth_control.signup_form);


route.post('/login', auth_control.login_form);


module.exports = route;