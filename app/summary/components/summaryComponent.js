'use strict';

import React from 'react';

if(process.env.BROWSER){
	require('../../stylesheets/summary.less');
}

export default React.createClass({
	render(){
		return(
			<div className="summary-wrapper">
				<h2>You can view the summary here</h2>
			</div>

		)
	}
})