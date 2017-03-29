const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/server');

const Country = require('../models/country-model.js');


const Countries = {

    name: "Venezuela",
    population: "30.41 million (2013)",
    president: "Nicolás Maduro",
    capital: "Caracas",
    bgImage: "https://images.unsplash.com/photo-1468125014324-4813ce22cf9e?dpr=2&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=",
    food: [
      {
        name: "Arepa",
        about: "It is the most famous dish from Venezuela, and is a cornmeal cake that can be grilled, baked or fried. Unlike in neighbouring Colombia where it is normally eaten unadorned, here in Venezuela it is split open and filled with a variety of cheese and meats.",

        image: "http://www.bartokys.com/images/comida/venezolana/arepa-fritas-o-asadas/reina-pepiada.png",

        recipe: "http://allrecipes.com/recipe/238510/homemade-arepas/",

        video: "https://www.youtube.com/watch?v=GTx-M9w75i8",

        location: "https://www.yelp.com/search?find_desc=arepas&find_loc=Miami%2C+FL&ns=1",
        reviews: [
          {
            name: "Marlon",
            comment: "I love arepas! I can have one every single day lol",
            stars: 5
          }
        ]
      },
       {
         name:  "Cachapa",
         about: "Similar to the traditional American pancake (much thicker than an English pancake), it is made from a puree of corn, sugar, salt and oil. It is normally then folded over with a large piece of a soft white cheese inside. It is sometimes served with cream and jam.",
         image: "https://storage.googleapis.com/zgt-user/cachapas_pancake_at_andes_cafe_houston.png",

         recipe: "http://globaltableadventure.com/recipe/fresh-corncakes-with-cheese-cachapas/",

         video: "https://www.youtube.com/watch?v=iZbvhiLr7_M",

         location: "https://www.yelp.com/search?find_desc=cachapas&find_loc=Miami,+FL"
       },
       {
         name:  "Pabellon",
         about: "The typical food of Venezuela is called the Pavilion, this food comes from the times of colonization in this region, its main elements are White Rice, shredded beef, black beans and Fried Banana Chops.",
         image: "http://static.wixstatic.com/media/81ea7a_57628f5b4e3a443591b35cb620b1f812.png_srz_980_735_85_22_0.50_1.20_0.00_png_srz",

         recipe: "http://www.whats4eats.com/meats/pabellon-criollo-recipe",

         video: "https://www.youtube.com/watch?v=BqLyVjyCg0w",

         location: "https://www.yelp.com/search?find_desc=pabellon&find_loc=Miami,+FL"
       }
    ]
};




  Country.create(Countries, (err, docs) => {
    if (err) {
      throw err;
    }


  mongoose.disconnect();
});

// { type: Schema.Types.ObjectId, ref: 'Food' }
