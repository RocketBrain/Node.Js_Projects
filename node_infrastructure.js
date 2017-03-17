//node infrastructure

//file system
var fs = require('fs');

//reads file directly from the system
//er represents any errors, and data is the file data.
fs.readFile('./resource.json', function (er, data) {
console.log(data);
})

//when all the data is read, we call an anonymous function aka the 'call back.'

//the call back is illustrated in function(er,data).


//The resoure.json file is read directly from the disk. Meanwhile, this entire process loops behind the scenes.
//We are able to handle any data as it comes our way due to the async nature of Node.
