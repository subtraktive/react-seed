'use strict';

import express from 'express';
import Router from "react-router";
import React from "react";
import routes from "./routes";
const app = express();

app.set('views', __dirname + '/../../views');  
app.set('view engine', 'jade');

app.get('/*', function (req, res) {  
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

export default app;