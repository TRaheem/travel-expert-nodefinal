const mongoose = require('mongoose');

/*
"Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection."
*/
const gallerySchema = new mongoose.Schema(
  {
    id:           Number,
    name:         String,
    source:       String,
    location:     String,
    description:  String,
    tourIdea:     String,
    attribution:  {
      source: String,
      credit: String,
      url:  String
    }
  }
);

// Compile and export model using the above Schema.
module.exports = mongoose.model('destination', gallerySchema);

// The first argument of mongoose.model() is the singular name of the collection the model is for. 
// ** Mongoose automatically looks for the plural, lowercased version of the model name. **
