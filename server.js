// Dependencies
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var argv = require('optimist').argv;


// configuration =================
mongoose.connect('mongodb://' + argv.be_ip + ':80/my_database');
app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// define model =================
var Todo = mongoose.model('Todo', {
				title : String,
				completed: Boolean
			});

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all todos
app.get('/api/todos', function(req, res) {

	// use mongoose to get all todos in the database
	Todo.find(function(err, todos) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)

		res.json(todos); // return all todos in JSON format
	});
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

	// create a todo, information comes from AJAX request from Angular
	Todo.create({
		title : req.body.title,
		completed : false
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});

});

app.put('/api/todos/:todo_id', function(req, res){
  return Todo.findById(req.params.todo_id, function(err, todo) {
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    return todo.save(function(err) {
      if (err) {
        res.send(err);
      }
      return res.send(todo);
    });
  });
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});
});

// application -------------------------------------------------------------
app.get('/', function(req, res) {
	res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(8080, argv.fe_ip);
console.log("App listening on port 8080");
