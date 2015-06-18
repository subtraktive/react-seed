import React from "react";  
import Router from "react-router";  
import routes from "./banners/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {  
  React.render(<Handler />, document.getElementById('app'));
  var fn = state.routes[0].handler.getInitialData;
  fn('/posts').then( (success, data) => {
  	console.log("success is", success, "data os", data)
  }, (error, data) => {
  	console.log("error", error, "and data", data);
  })
 
});