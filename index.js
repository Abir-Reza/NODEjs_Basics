// -------------------------  
// node js core modules
// --------------------------  

const os = require('os');
// const myPath = '/home/abir/Study/Web/NODEjs_Basics/index.js';
// console.log(os.freemem());

const path = require('path');
// console.log(path.parse(myPath));


// file system
const fs = require('fs');


// recommended to use asynchrounus way, not sync
fs.writeFileSync('myfile.txt', 'how are you? ');
// fs.writeFileSync('myfile.txt', 'Hello node js ');
fs.appendFileSync('myfile.txt', 'Hello node js ');


// as asynchonous requires a callback function (err, data) is passed as callback argument. it returns either err or data
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
})


console.log('Reading File in asynchrnous way ');




