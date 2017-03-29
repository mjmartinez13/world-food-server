const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema =  new Schema ({

  name: { type: String },
  population: { type: String },
  president: { type: String },
  capital: { type: String },
  bgImage: { type: String },

  food: [
    {
      name: { type: String },
      about: { type: String },
      image: { type: String } ,
      recipe: { type: String },
      video: { type: String },
      location: { type: String },
      comments: [String]
    }
  ]
});


const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
