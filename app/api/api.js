'use strict';
var multer  = require('multer');
var upload = multer({dest: 'uploads/'});
module.exports = function (app) {

	app.post('/upload', upload.single('0'), function(req, res) {
   		res.send({size:req.file.size});
    	res.end();
	});
    
};
