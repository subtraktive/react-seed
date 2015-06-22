'use strict';

import http from 'superagent';
import {config} from './conf';
import {Promise} from 'es6-promise';

export const Api = {
	get: (url) => {
		console.log("the url is", config.root + url);
		return new Promise( (resolve, reject) => {
			http
				.get(config.root + url)
				.end( (err, res) => {
					if(res.status === 404){
						reject({err: 'not found', data: {}});
					} else {
						console.log("resolved", resolve);
						resolve(JSON.parse(res.text))
					}
				})
		})
	} 
}

