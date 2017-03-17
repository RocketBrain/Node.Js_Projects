//file system
var fs = require('fs');

//reads file directly from the system
//er represents any errors, and data is the file data.
fs.readFile('./resource.json', function (er, data) {
console.log(data);
})


//Hello World Node server.
var http = require('http');
var server = http.createServer();
server.on('request', function(req,res) {

  res.writeHead(900, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
})

server.listen(3000);

console.log('Server running at http://localhost:3000/');

//streaming data as it comes in

var stream = fs.createReadStream('./resource.json')
stream.on('data', function (chunk) {
console.log(chunk)
})
stream.on('end', function () {
console.log('finished')
})
