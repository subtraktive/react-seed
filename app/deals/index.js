'use strict';

import express from 'express';
const app = express();

app.set('views', __dirname);  
app.set('view engine', 'jade');

app.get('/deals', (req, res) => res.render('deals'));

export default app;