var mongoose = require('mongoose');

// cantinas Schema

var cantinasSchema = mongoose.Schema({
	cantina:{
		type: String,
		required: true
	},
	sopa:{
		type: String
	},
	carne:{
		type: String
	},
	peixe:{
		type:String
	},
	vegetariano:{
		type: String
	},
	sobremesa:{
		type: String
	},
	data:{
		type: String
	}
});

var cantinas = module.exports = mongoose.model('cantinas', cantinasSchema);

// get cantinas

module.exports.getcantinas = function(callback, limit){
	cantinas.find(callback).limit(limit);
}

// Find by id

module.exports.getcantinasById = function(id, callback){
	cantinas.findById(id, callback);
}

// Add Mod
module.exports.addcantinas = function(cantinas,callback){
	cantinas.create(cantinas, callback);
};

// Update Mod
module.exports.updatecantinas = function(id, cantinas, options, callback){
	var query = {_id: id};
	var update = {
		cantina: cantinas.cantina,
		sopa: cantinas.sopa,
		carne: cantinas.carne,
		peixe: cantinas.peixe,
		vegetariano: cantinas.vegetariano,
		sobremesa: cantinas.sobremesa,
		data: cantinas.data,
	}
	cantinas.findOneAndUpdate(query, update, options, callback);
};

// Delete Mod
module.exports.removecantinas = function(id ,callback){
	var query = {_id: id};
	cantinas.remove(query, callback);
};