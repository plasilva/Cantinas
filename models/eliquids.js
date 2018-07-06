var mongoose = require('mongoose');

// Mods Eliquids

var eliquidsSchema = mongoose.Schema({
	brand:{
		type: String,
		required: true
	},
	flavour:{
		type: String
	},
	description:{
		type: String
	},
	size:{
		type:String
	},
	price:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	}
});

var eliquids = module.exports = mongoose.model('Eliquids', eliquidsSchema);

// get Eliquids

module.exports.getEliquids = function(callback, limit){
	Eliquids.find(callback).limit(limit);
}

// get Eliquids By ID

module.exports.getEliquidsById = function(id, callback){
	Eliquids.findById(id, callback);
}

// Add Eliquid
module.exports.addEliquids = function(eliquids,callback){
	Eliquids.create(eliquids, callback);
};

// Update Eliquid
module.exports.updateEliquids = function(id, eliquids, options, callback){
	var query = {_id: id};
	var update = {
		brand: eliquids.brand,
		flavour: eliquids.flavour,
		description: eliquids.description,
		size: eliquids.size,
		price: eliquids.price,
		image_url: eliquids.image_url,
		buy_url: eliquids.buy_url
	}
	Eliquids.findOneAndUpdate(query, update, options, callback);
};

// Delete Eliquids
module.exports.removeEliquids = function(id ,callback){
	var query = {_id: id};
	Eliquids.remove(query, callback);
};