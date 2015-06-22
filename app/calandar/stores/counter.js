'use strict';

import {Dis} from 'disto';
import {dis, $} from '../actions/$.js';

//let dispatcher = new Dis();

let initialState = {
	counter: 0,
	no: 0
};

function reduce(state, action){
	switch(action){
		case $.inc:
			return {counter: state.counter + 1};
		case $.dec:
			return {counter: state.counter -1};
		case $.asyn:
			let [q] = arguments;
			console.log("called")
			return{
				 no: state.no + 1
			};
		case $.asyn.done:
			
			let [k] = arguments;
			console.log("then called", k)
			return{
				 k
			};
		default:
			return state;
	}
}

export const counter = dis.register(initialState, reduce);

