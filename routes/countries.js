const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:id', (req, res) => {
    const requestedCountryId = req.params.id; //"1"
    const country = data.countries.filter((countryInData) => {
        //1
        if (countryInData.id.toString() === requestedCountryId) return countryInData;
    });

    res.status(200).json(country);
});

module.exports = router;
