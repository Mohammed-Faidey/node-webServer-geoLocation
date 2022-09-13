const request = require('request');
const forecast = (latitude, longitude, callback) =>{

    const url = '...' + latitude + ',' + longitude;

    request({url: url, json: true}, (error, response)=> {
        if (error){
            callback('unable to connect to wether server', undefined)
        } else if(response.body.error){

        } else{
            
        }

    })

}