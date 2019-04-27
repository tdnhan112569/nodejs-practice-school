var express = require('express');
var app = express();

var categories = require('./public/categories.json');
var users = require('./public/users.json');
var products = require('./public/products.json');

var fs = require("fs");

app.get('/admin', (req, res) => {
    //app.use(express.static('./startbootstrap/startbootstrap/index.html'))
    res.render('./startbootstrap/startbootstrap/index.html')
})

app.get('categories', (req, res) => {
   // res.send(categories)

    fs.readFile( __dirname +'public/categories' +".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });
 
})


app.get('/products', (req, res) => {
   // res.send(products)
    fs.readFile( __dirname +'public/products' +".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });
})

app.get('/products/:id', (req, res) => {
    // res.send(products)
     fs.readFile( __dirname +'public/products' +".json", 'utf8', function (err, data) {

        var product = data.body.filter(product => product._id === req.params.id)
            
        res.send(product);
        res.end(product)
        // res.end( data );
     });
 })

app.get('/users', (req, res) => {
    fs.readFile( __dirname +'public/users' +".json", 'utf8', function (err, data) {
        res.send(data);
        res.end( data );
    });
})

app.listen(3000);
console.log('3000 is the magic port');