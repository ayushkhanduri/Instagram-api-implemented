var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static('../app-2/public'));

app.set('view engine','ejs');

ig.use({
	access_token: '3806240046.1677ed0.a8405e674fa1472a83b3c6d2f4e863ce',
});

app.get('/',function(req,res){
	ig.user_self_media_recent(function(err,medias,pagination,remaining,limit){
		res.render('pages/index', { grams: medias });
	});
});

app.listen(8080);

console.log("App started");
