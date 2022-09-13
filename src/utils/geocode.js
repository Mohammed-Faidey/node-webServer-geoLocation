const request = require('request');
const chalk = require('chalk');

const geocode = (address, callback) =>{
    //const url = 'https://api.yourwebsite.com/example/example' + address + 'rest of the url ';
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1IjoibW9oYW1tZWRmYWlkZXkiLCJhIjoiY2w3dmRhY2R4MGFxZDNwbHBsdHh1bDM1YyJ9.3gWSBjH8KfVpLOGP6VMo0A&limit=1";
    
    request({url:url, json:true}, (error, response)=>{
        //console.log(chalk.red.inverse(JSON.parse( response.body)))
        //console.log(chalk.red.inverse( response.body.features[0]))
        
        if(error){
            callback('Unable to connect to location services', undefined);
        }
        else if(response.body.features.lenght === 0){
            callback('Unable to find location try another search', undefined);
        }
        
        else{
            try {
                callback(undefined, {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
            } catch (error) {
                callback(error, {})
            }

        }
    })
}

module.exports = geocode