'use strict';

import Router from "react-router"; 
let Route = Router.Route;
import React from "react";

import Banner from "../banners/components/bannerComponent";
import Deals from "../deals/components/dealsComponent";
import Email from "../email/components/emailComponent";
import App from "./components/appComponent";

export default (  
	<Route handler={ App } path="/">
		<Route path="/banners" handler={Banner} />
		<Route path="/deals" handler={Deals} />
		<Route path="/email" handler={Email} />
	</Route>

);