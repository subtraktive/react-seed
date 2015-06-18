'use strict';

import React from 'react';
import { Router, Route, Link, RouteHandler } from 'react-router';

export default React.createClass({
	render(){
		return(
			<div>
				<ul>
					<li><Link to='/banners'>Banners</Link></li>
					<li><Link to='/deals'>Deals</Link></li>
					<li><Link to='/email'>Email Section</Link></li>
				</ul>
				<RouteHandler />
			</div>
		)		
	}

})