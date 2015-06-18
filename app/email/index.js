'use strict';

import express from 'express';
const app = express();

app.set('views', __dirname);  
app.set('view engine', 'jade');

app.get('/email', (req, res) => res.render('email'));

export default app;