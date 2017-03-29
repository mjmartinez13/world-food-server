const express = require('express');

const mongoose = require('mongoose');

const Country =  require('../models/country-model');

const router = express.Router();


router.get('/country', (req, res, next) => {
  Country.find((err, countryList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(countryList);
  });
});

router.get('/country/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valud' });
    return;
  }
  Country.findById(req.params.id, (err, theCountry) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(theCountry);
  });
});




router.post('/country/', (req, res, next) => {
  const theCountry = new Country({
    comment: req.body.comment,
  });

  theCountry.save((err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: 'new Review created',
      id: theCountry._id
    });
  });
});



module.exports = router;
