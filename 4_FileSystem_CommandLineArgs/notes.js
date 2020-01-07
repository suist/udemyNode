const fs = require('fs')

const getNotes =()=>{
    return 'your notes...'
}


const addNote = function(title,body){

    const notes = loadNotes()
    const duplicatedNotes = notes.filter(function (note){
        return note.title === title
    })

    if(duplicatedNotes.length === 0){
        notes.push({
            title: title,
            body : body
        })
        saveNotes(notes)
        console.log("new note added")
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> {return note.title!== title })

    if( notes.length > notesToKeep.length){

        console.log('Note removed!')

    saveNotes(notesToKeep)

    }else {
        console.log('No note found')
    }





}


const readNote = (title)=> {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if(note) {

        console.log(note.title)
        console.log(note.body)
    }else {
        console.log('note not found!')
    }
}

const listNotes = () =>{
    const notes = loadNotes()

    console.log('your notes!')
    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const loadNotes = function(){
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)


    }catch(e){
        []
    }
}

const saveNotes = function (notes){

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}




module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNote : listNote

}