'use strict';

import express from "express";  
import React from "react";  
import Router from "react-router";  
import banners from './app/banners';
import deals from './app/deals';
import email from './app/email';
import path from 'path';
import httpProxy from 'http-proxy';


const app = express();
let proxy = httpProxy.createProxyServer({
	changeOrigin: true
}); 

app.use(banners);
app.use(deals);
app.use(email);

let isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? 8080 : 3000;
let publicPath = path.resolve(__dirname, 'public');

//app.use(express.static(publicPath));

if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  let bundle = require('./server/bundle.js'); 
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});