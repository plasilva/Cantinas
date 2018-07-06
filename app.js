var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


cantinas = require('./models/cantinas');
Eliquids = require('./models/eliquids');

// Connect to mongoose
mongoose.connect('mongodb://admin:exemplo1!@ds129321.mlab.com:29321/cantinasdb');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/vape');
});

// ler mods
app.get('/api/cantinas', function(req, res){
	cantinas.getcantinas(function(err, cantinas){
		if(err){
			throw err;
		}
		res.json(cantinas);
	});
});


// adicionar mod
app.post('/api/cantinas', function(req, res){
	var cantinas = req.body;
	cantinas.addcantinas(cantinas, function(err, cantinas){
		if(err){
			throw err;
		}
		res.json(cantinas);
	});
});

// ler eliquids
app.get('/api/eliquids', function(req, res){
	Eliquids.getEliquids(function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

//adicionar eliquids
app.post('/api/eliquids', function(req, res){
	var eliquids = req.body;
	Eliquids.addEliquids(eliquids, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// ler mods por id
app.get('/api/cantinas/:_id', function(req, res){
	cantinas.getcantinasById(req.params._id, function(err, cantinas){
		if(err){
			throw err;
		}
		res.json(cantinas);
	});
});

//ler eliqudis por id
app.get('/api/eliquids/:_id', function(req, res){
	Eliquids.getEliquidsById(req.params._id, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// update mods
app.put('/api/cantinas/:_id', function(req, res){
	var id = req.params._id;
	var cantinas = req.body;
	cantinas.updatecantinas(id, cantinas,{}, function(err, cantinas){
		if(err){
			throw err;
		}
		res.json(cantinas);
	});
});

// update eliquids
app.put('/api/eliquids/:_id', function(req, res){
	var id = req.params._id;
	var eliquids = req.body;
	Eliquids.updateEliquids(id, eliquids,{}, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});

// delete mods
app.delete('/api/cantinas/:_id', function(req, res){
	var id = req.params._id;
	cantinas.removecantinas(id, function(err, cantinas){
		if(err){
			throw err;
		}
		res.json(cantinas);
	});
});

// delete eliquids -Naousadas
app.delete('/api/eliquids/:_id', function(req, res){
	var id = req.params._id;
	Eliquids.removeEliquids(id, function(err, eliquids){
		if(err){
			throw err;
		}
		res.json(eliquids);
	});
});



app.listen(process.env.PORT || 3000);