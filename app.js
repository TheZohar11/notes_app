// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Andrew.')
// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')
// fs.appendFileSync('notes.txt', ' added new text')
// const str = chalk.green.bold.inverse.italic('success')
// console.log(str)
//const validator = require('validator')
//console.log(validator.isEmail('zohar@yal.com'))

// const command = process.argv[2]

// add run as so: node app.js add --title="title2 " --body="body4 "
// remove run as so: node app.js remove --t itle="title2 "

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// add, remove, read, list
//add command
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove selected note',
    builder: {
        title: {
            describe: 'note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'listing note',
    handler(){
        notes.listNotes()
    }
})

//reading note
// run as so: node app.js read --title="title3 " 
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv){
        notes.readNote(argv.title)
    }
})

 
console.log(yargs.argv)

