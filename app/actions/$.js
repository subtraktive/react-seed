'use strict';

import {Dis, act} from 'disto';

export const dis = new Dis();

export const $ = dis.act({
	inc: '',
	dec: ''
});
