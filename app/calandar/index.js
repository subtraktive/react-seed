'use strict';

import express from 'express';
const app = express();
app.set('views', __dirname);  
app.set('view engine', 'jade');

app.get('/banners', (req, res) => {
	//res.type('text/')
	res.render('banners')
});

export default app;
