// const request = require('request')

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vpc3QiLCJhIjoiY2s1NHJzaDh5MG1rZjNucXZod2E3aWRiZSJ9.QIrkvYolSxwTPynXCIH2dg"

// request({url: url, json: true},(error,response) => {

//     if(error){

//     }else{
//     const lat =response.body.features[0].center[0]
//    const long =response.body.features[0].center[1]

//    console.log( lat,long)
//     }

// })


const request = require('request')
const url = "https://api.darksky.net/forecast/3e34b3f1dff839d455e4a85bdfadcc75/37.8267,-122.4233"
request({url : url, json:true},(error,request)=>{

    if(error){
        console.log('unable to connect to location services')
    }else if(request.body.error){
        console.log('body error!')
    }else{
        console.log(' it works well')

    }

})


//request.body.features.length ===0