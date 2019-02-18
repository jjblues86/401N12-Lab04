'use strict';
const fs = require('fs');//File System

const names = ['Jabin', 'Leon', 'Ansu'];

// const bufferNames = Buffer.from(names[0]);



const customToString = buffer => {
    let result = '';

    buffer.forEach((arr) => {
        for(let j = 0; j < arr.length; j++){
            // result += arr.charAt(j);
            result += arr.charCodeAt(j).toString(16)
        }
        result += ' ';

    })
    return result;
};

fs.writeFile(`${__dirname}/loop.js`, names, (error) => {
    if(error) throw error;
        console.error(error);

})

const tagName = fs.openSync('pair-programming.txt', 'a+');

const buf = new Buffer('<article>');

fs.appendFile(tagName, buf, err => {

});

fs.write(tagName, buf, 0, buf.length, 0);



console.log(names);
console.log(names.toString());
console.log(customToString(names));
