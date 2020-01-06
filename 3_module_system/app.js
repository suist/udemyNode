const fs = require('fs')

fs.appendFileSync('notes.txt', 'This is su');


const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')



const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('skoco73@gmail.com'))
console.log(chalk.green.inverse('Hello world'))


// nodemon app.js
//nodemon app.js localhost 3000


