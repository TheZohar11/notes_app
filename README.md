note app that saves both note title and body to a json file that is used as a sample database.
supports methods of adding a note, removing a note, reading a note and listing all notes.
for each of thoose you want, run as so:
add a note:
node app.js add --title="note title" --body="note body"
removing a note:
node app.js remove --title="note title"
reading a note:
node app.js read --title="note title"
listing all notes:
node app.js list
