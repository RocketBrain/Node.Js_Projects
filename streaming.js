//streaming data as it comes in

var stream = fs.createReadStream('./resource.json')
stream.on('data', function (chunk) {
console.log(chunk)
})
stream.on('end', function () {
console.log('finished')
})
