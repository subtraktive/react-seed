'use strict';

import express from 'express';
const app = express();



app.get('/email', (req, res) => res.render('email'));

export default app;