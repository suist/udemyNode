const fs = require('fs')
// const book = {
//     title : 'ego is the enemy',
//     author :' suist'

// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)



// const databuffer = fs.readFileSync('1-json.json')
// const dataJSON = databuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
 data.title = "eeeeeee"

 const dataUpdate = JSON.stringify(data)
 fs.writeFileSync('1-json.json',dataUpdate)
 


