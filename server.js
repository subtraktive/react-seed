/*
	Since Node doesn't support ES6 yet, we write this file in ES5. Once 'babel/register' is required the subsequent
	files can contain ES6!!
*/

require("babel/register");

var app = require("./app.js");