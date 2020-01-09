
const geocode =require('./util/geocode')
const forecast = require('./util/forecast')

const address = process.argv[2]



if(!address){
    console.log('Please provide an address')
}else {

}

geocode(address,(error,data) => {
    if(error){
        return console.log(error)
    }

    forecast(data.latitute,data.longitude, (error,forecastData)=>{
        if(error) {
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})
// console.log('starting')

// setTimeout(()=> {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(()=> {
//     console.log('0 second timer')
// }, 0)

// console.log('Stopping')

// const request = require('request')

// const url = "https://api.darksky.net/forecast/3e34b3f1dff839d455e4a85bdfadcc75/37.8267,-122.4233"

// request({url: url, json:true}, (error, response) => {
//     const summary = response.body.currently.summary
//     const temperature = response.body.currently.temperature

//     console.log('today weather forecast! It is '+ summary+' and temperature is '+temperature)
// })




// const geocode = (address, callback) => {

//     const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/'"+address +".json?access_token=pk.eyJ1Ijoic3Vpc3QiLCJhIjoiY2s1NHJzaDh5MG1rZjNucXZod2E3aWRiZSJ9.QIrkvYolSxwTPynXCIH2dg"

//     request({url:url, json:true}, (error, response) => {
//         if(error){
//             callback('Unable to connect to location services',undefined)

//         }else if (response.body.features.length === 0){

//             callback('Unable to find location. Try another search',undefined)

//         }else {

//             callback(undefined, {
//                 latitude :response.body.features[0].center[0],
//                 longitude : response.body.features[0].center[1],
//                 location:response.body.features[0].place_name
//             })




//         }
//     })
// }

// geocode('New York',(error,data)=> {
//     console.log('Error',error)
//     console.log('Data',data)

// })

// const forecast = require('./forecast.js)


// forecast(-74.333, 33.2524, (error, data) => {
//     console.log('Error',error)
//     console.log('Data',data)
// })