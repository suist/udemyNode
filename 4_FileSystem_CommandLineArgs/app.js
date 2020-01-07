const yargs = require('yargs')
const notes = require('./notes.js')



yargs.command({
    command:"add",
    describe:"Add the list",
    builder:{
        title:{
            describe :"Note title",
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"node body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
     
    }

}
)

yargs.command({
    command : "remove",
    describe: "remove information",
    builder :{
        title:{
            describe :"Note title",
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"node body",
            demandOption: true,
            type: "string"
    },
},
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command:"list",
    describe :' list in array',
    handler(){
        notes.listNotes()

    }
})


yargs.command({
    command:"read",
    describe:"read a notes...",
    builder:{
        title:{
            describe: 'note title',
            demandOption:true,
            type: 'string'
        }

    },
    handler(argv){
        notes.readNotes(argv.title)
    }

}
)


// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding note')

// }else if (command === 'remove'){
//     console.log('Removing note!')
// }

