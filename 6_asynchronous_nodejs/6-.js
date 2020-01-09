// HTTP . HTTPS 

const https = require('https')
const url = 'https://api.darksky.net/forecast/3e34b3f1dff839d455e4a85bdfadcc75/37.8267,-122.4233'

const request= https.request(url,(response)=> {

    let data = ''


    response.on('data',(chunk) => {
        data = data + chunk.toString()

    })

    response.on('end',() => {
        const body= JSON.parse(data)
        console.log(body)
    })

    })

    request.on('error',(error) => {
        console.log('An error', error)
})

request.end()