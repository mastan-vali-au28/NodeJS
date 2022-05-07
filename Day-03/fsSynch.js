//Importing the fs module
const fs = require('fs');
console.log("Before reading");
 
//Reading the file of myfile.txt
const buffer = fs.readFileSync('./myfile.txt',{encoding:'utf-8'});

//Printing the file 
console.log(buffer);

//Printing the statement
console.log("After reading");