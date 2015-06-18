'use strict';

//var React = require('react');

import React from 'react';
import {counter} from '../stores/counter.js';
import {$} from '../actions/$.js';
import {mix} from 'disto';
import {Api} from '../server/api';
console.log("the api goit os", Api);

export default React.createClass({

	mixins: [mix],

	observe(){
		return {counter};
	},

	statics: {
		getInitialData: () => {
			return Api.get('/posts');
		}
	},

	render(){
		return(
			<div>
				<div onClick={$.inc}>
					<span>Click me to increase is</span>
				</div>
				<div onClick={$.dec}>
					<span>Click me to decrease</span>
				</div>
				<div>
					The value is {this.state.data.counter.counter}
				</div>
				<div onClick={$.asyn}>
					click for async {this.state.data.counter.no}
				</div>
			</div>
		)
	}
});
