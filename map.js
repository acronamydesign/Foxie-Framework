path = require('path');

var map = {
	"src":{
		"root":path.normalize(__dirname),
		"style":path.normalize(__dirname+'/style/'),
		"stylFile":path.normalize(__dirname+'/style/**/*.styl'),
		"js":path.normalize(__dirname+'/js/'),
		"jsFile":path.normalize(__dirname+'/js/**/*.js'),
		"partials":path.normalize(__dirname+'/partials/'),
		"img":path.normalize(__dirname+'/img/')
	},
	"dest":{
		"root":path.normalize(__dirname+'/build/'),
		"css":path.normalize(__dirname+'/build/css/'),
		"js":path.normalize(__dirname+'/build/js/'),
		"img":path.normalize(__dirname+'/build/img/')
	},
	"settings":{
		"imagemin":{
			"progresive":true,
			"svgoPlugins": [{removeViewBox:false}]
		}
	}
}

module.exports = map;