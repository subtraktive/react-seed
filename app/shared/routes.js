'use strict';

import Router from "react-router"; 
let Route = Router.Route;
import React from "react";

import App from "./components/appComponent";
import Deals from "../deals/components/dealsComponent";
import Request from "../requestForm/components/requestForm";
import Calandar from "../calandar/components/calandarComponent";
import Summary from "../summary/components/summaryComponent";
import Allocation from "../allocation/components/allocationComponent";

export default (  
	<Route handler={ App } path="/">
		<Route path="/summary" handler={Summary} />
		<Route path="/requestForm" handler={Request} />
		<Route path="/calandar" handler={Calandar} />
		<Route path="/allocation" handler={Allocation} />
		<Route path="/deal" handler={Deals} />
	</Route>
);