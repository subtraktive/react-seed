'use strict';

import {Dis, act} from 'disto';

export const dis = new Dis();

export const $ = dis.act({
	inc: '',
	dec: '',
	asyn: function(){
		console.log("calling async");
		setTimeout(()=> ($.asyn.done('hi', 'wow')), 2000)
	}
});
