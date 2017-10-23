var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
// What I've put in:

app.get('/films', function(req, res){
  res.json(films)
});

app.get('/films/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

app.post('/films', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

app.put('/films/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data:films});
});

app.delete('/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});


app.listen(3000, function () {
  console.log('BLAINE THE TRAIN IS HEADING TOWARD PORT '+this.address().port +' PARDNER.');
});
