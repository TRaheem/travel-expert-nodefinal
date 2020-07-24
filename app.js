
// import modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const moment = require('moment');
const cors = require('cors');

// Models
const Image = require('./models/destination.js');

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};


// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

// create express app
const app = express();
// EJS still needs to be installed via NPM
app.set('view engine', 'ejs');

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://dashboard.heroku.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Define an endpoint handler for the home page 
app.get('/', function(request, response){
  response.render('index',{});
})

// Setup GET endpoints handlers for each page.
app.get('/login.html', function(request, response){
  response.render('login',{});
})

app.get('/register.html', function(request, response){
  response.render('register',{});
})

// Define an endpoint handler for the individual destination pages
app.get('/:id', function(request, response){

  // model.findOne returns the first object it finds
  // model.find will always return an array, even if it only finds one 
  Image.findOne({'id': request.params.id}, function(error, destination) {
  
    // Check for IDs that are not in our list
      if (!destination) {
      return response.send('Invalid ID.');
    }

    // Compile view and respond
    response.render('destination-single', destination);
  });
})

// Create a JSON (no EJS here) that returns the entire destination JSON
// This is the endpoint that the frontend gallery script calls (see: ./public/js/app.js).
app.get('/api/images', function(request, response){

  // response.json(destinations);

  Image.find(function(error, images) { 
    response.json(images);
  });

})

// if no file or endpoint found, send custom 404-page as a response to the browser
app.use(function(req, res) {
  res.status(404);
  res.render('404-page', {});
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});