const fs = require('fs')

const args = process.argv.slice(2);

var fileFrom = args[0]
var fileTo = args[1]

fs.readFile(fileFrom, "utf-8", (err, data) => {
	if(err) { 
		console.log(err)
		return 
	}
	var json = JSON.parse(data)
	fs.writeFileSync(fileTo, JSON.stringify(json))
})
