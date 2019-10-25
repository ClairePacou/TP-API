var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send({test:"content"});
});

app.get('/sous-sol', function(req, res) {
res.setHeader('Content-Type', 'text/plain');
res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
//res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
}); 

app.use(function(req, res, next){
//res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.send(302, 'Page introuvable !');
});
app.listen(8080);

/*{
    "ville":"Dunkerque",
    "habitants":"88876",
   " Departement" : "59";
}*/
