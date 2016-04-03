var peoples = require('./../controllers/peoples.js');
module.exports = function (app) {
	// body...
	app.get('/peoples',function(req,res){
		peoples.index(req,res);
	});
	app.post('/create',function(req,res){
		peoples.create(req,res);
	});
	app.delete('/peoples/:id',function(req,res){
		peoples.delete(req,res);
	})

}