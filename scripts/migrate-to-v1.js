const fs = require('fs')

function convert(obj) {
	var newObj = {
		"id": obj.id,
        "title": obj.title,
        "measure": obj.paramName,
        "type": obj.type,
        
        "request": obj.request,
        "formatter": obj.formatter,
        
       	"rules": {
       		"type": "none",
       		"parseRules": obj.parseRules
       	},
        "website": obj.website,
        "author": obj.author
	}
	return newObj
}

fs.readFile("./../unavailable_appstore.json", "utf-8", (err, data) => {
	if(err) { 
		console.log(err)
		return 
	}
	var json = JSON.parse(data)
	var result = []
	for(i in json) {
		var group = json[i]
		var items = []
		for (j in group.metrics) {
			items.push(convert(group.metrics[j]))
		}
		result.push({
			"name": group.name,
			"tags": group.tags,
			"metrics": items
		})
	}
	fs.writeFileSync("./../v1/unavailable_appstore.json", JSON.stringify(result, null, "\t"))
	fs.writeFileSync("./../v1/unavailable_appstore.min.json", JSON.stringify(result))
})
