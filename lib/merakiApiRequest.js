const request = require('request');

module.exports = function (method,apiKey,uri,body,debugging={debug:false}){
    return new Promise((resolve,reject) => {
        const {debug} = debugging;
        if (!method || ! uri || !apiKey || !body) return reject('Missing parameters: method or uri or apiKey or body')
        const options = {
            'method': method,
            'url': `https://n154.meraki.com/api/v0${uri}`,
            'headers': {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              'X-Cisco-Meraki-API-Key': apiKey
            },
            'body':body,
            json: true
          };
        // debug
        if (debug === true) return resolve(options)
        request(options, function (error, response) { 
            if (error) reject(error);
            // debug
            console.log(response.body.toString());
            resolve(response.body);
        });
    });
};