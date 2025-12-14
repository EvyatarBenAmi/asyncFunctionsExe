import fs from "fs";

function write() {
    const data = "Hello from async writeFile"
    fs.writeFile(`./note.txt`, data, 'utf8', (err) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        } else {
            console.log('File written successfully');
        }
    });
}
// write()

function read() {
    fs.readFile("note.txt", "utf8", (err) => {
        if (err) {
            console.error("Error reading file")
            return;
        } else {
            console.log("Content")
        }
    })
}
// read()
