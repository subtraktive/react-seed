'use strict';

import {Dis} from 'disto';
import {dis, $} from '../actions/$.js';

//let dispatcher = new Dis();

let initialState = {
	counter: 0
};

function reduce(state, action){
	switch(action){
		case $.inc:
			return {counter: state.counter + 1};
		case $.dec:
			return {counter: state.counter -1};
		default:
			return state;
	}
}

export const counter = dis.register(initialState, reduce);

