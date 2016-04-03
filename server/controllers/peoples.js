var mongoose = require('mongoose');
var People = mongoose.model('People');
module.exports = {
	index: function(req,res){
		// body...
		People.find({},function(err,output){
			if (err) {
				console.log('errors',err)
			}else{
				res.json(output);
			}
		})
	},
	create:function(req,res){
		People.create(req.body,function(err,output){
			if (err) {
				console.log('create errors',err)
			}else{
				res.json(output);
			}
		})
	},
	delete:function(req,res){
		console.log(req.params);
		People.remove({_id:req.params.id},function(err, data){
			if (err) {
				console.log(err)
			}else{
				res.end();
			}
		})
	}
}