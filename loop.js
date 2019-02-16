'use strict';
const os = require('os');
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



//
// // for(let i = 0; i < names.length; i++){
// //     console.log(names[i]);
// //}
//
// names.forEach((arr) => {
//     console.log(arr);
// })

//
console.log(names);
console.log(names.toString());
console.log(customToString(names));
// console.log(bufferNames);
// var data = “A”;
// console.log(names[0].charCodeAt(0).toString(16));

