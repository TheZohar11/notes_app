const fs = require('fs')
const chalk = require('chalk')


const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => title !== note.title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesToKeep)
    }
        
    else
        console.log(chalk.red.inverse('no note removed'))
    
}


const addNote = (title, body)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => title === note.title )
    const duplicateNote = notes.find((note) => title === note.title )
    if(!duplicateNote){
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('note name taken'))
    }
    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}
const listNotes = () =>{
    console.log(chalk.blue.inverse('your notes...'))
    const notes = loadNotes()
    notes.forEach((note, i) => {
        console.log(chalk.blue.inverse(`note ${i} : ${note.title}`))
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const notei = notes.find( (note) => note.title === title )
    if(notei){
        console.log(chalk.magenta.inverse(`note title: ${notei.title}  note body: ${notei.body}`))
    }
    else{
        console.log(chalk.red.inverse(`give me a real title;)`))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}