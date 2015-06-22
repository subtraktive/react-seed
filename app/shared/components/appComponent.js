'use strict';

import React from 'react';
import { Router, Route, Link, RouteHandler } from 'react-router';

/* Requiring on the server fails 
	Check 1 link from links.txt for more details
*/
if(process.env.BROWSER){
	require('../../stylesheets/base.less');
}

export default React.createClass({
	render(){
		return(
			<div className='react-wrapper'>
				<div className="header">
					<ul className='clearfix container'>
						<li><Link to='/summary'>Summary</Link></li>
						<li><Link to='/requestForm'>Request Form</Link></li>
						<li><Link to='/calandar'>Calandar</Link></li>
						<li><Link to='/allocation'>Allocation Page</Link></li>
						<li><Link to='/deal'>Deal Request</Link></li>
					</ul>
				</div>
				<div className="container main-content">
					<RouteHandler />
				</div>
				
			</div>
		)		
	}

})