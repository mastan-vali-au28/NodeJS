//Importing the file
const fs = require('fs');
console.log("Before Reading");

//Reading the file
const data = fs.readFile('./myFile.txt',{encoding:'utf-8'},(error,data)=>{
if(error){
    console.log("unable to read the file");
}else{
    console.log(data);
}
});
console.log("After file reading")