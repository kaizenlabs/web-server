var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('Private route hit!');
		next();
	},
	logger: function(req,res,next){
		console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl); 
		next();
	}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname +'/public'));

app.listen(port, function(){
	console.log('Express Server started...');
	console.log('Server Running. Port: ' + port);
});
