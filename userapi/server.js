var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  User = require('./api/model/userModel'), //created model loading here
  CartItem = require('./api/model/cartModel'), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;

const string1="mongodb+srv://vinuthna:KrVCGQwRQHFb7sy@cart.6s442.mongodb.net/product_db?retryWrites=true&w=majority"// add your database string here
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false})
        .then(() => console.log( 'Database Connected' ))
        .catch(err => console.log( err ));
// mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("Hello World");
  });

var cartRoutes = require('./api/routes/cartRoutes'); //importing route
var userRoutes = require('./api/routes/userRoutes'); //importing route


cartRoutes(app); //register the route
userRoutes(app); //register the route




app.listen(port);


console.log('shopping cart RESTful API server started on: ' + port);
