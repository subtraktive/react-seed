'use strict';

//var React = require('react');

import React from 'react';
import {counter} from '../stores/counter.js';
import {$} from '../actions/$.js';
import {mix} from 'disto';

export default React.createClass({

	mixins: [mix],

	observe(){
		return {counter};
	},

	render(){
		return(
			<div>
				<div onClick={$.inc}>
					<span>Click me to increase</span>
				</div>
				<div onClick={$.dec}>
					<span>Click me to decrease</span>
				</div>
				<div>
					The value is {this.state.data.counter.counter}
				</div>
			</div>
		)
	}
});

