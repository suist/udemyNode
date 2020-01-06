const yargs = require('yargs')



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
    handler : function(argv){
        console.log("Adding...", argv.title)
    }

}
)

yargs.command({
    command:"read",
    describe:"read a notes...",
    handler : function(){
        console.log("reading...")
    }

}
)


// const command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding note')

// }else if (command === 'remove'){
//     console.log('Removing note!')
// }

