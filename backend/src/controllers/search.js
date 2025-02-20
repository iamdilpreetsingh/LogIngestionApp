const qs = require('querystring')
const { Router } = require('express');
const Log = require('../models/LogsSchema.js');
const app = Router();

app.get('', async (req, res) => {
    let combinedFilter = {};
    const searchWord = req.query.searchWord;
    const dates = req.query.dates;
    if (searchWord) {
        combinedFilter = { $text: { $search: searchWord }, ...combinedFilter }
    }
    if (dates) {
        combinedFilter = { ...combinedFilter, timestamp: { $gte: dates[0], $lte: dates[1] } }
    }
    const filters = req.query.filters;
    if (typeof (filters) === 'string') {
        combinedFilter[`${filters}`] = searchWord;
    } else {
        if (filters) {
            filters.forEach((filter) => {
                combinedFilter = { ...combinedFilter, [`${filter}`]: searchWord };
            });
        }
    }
    try {
        const filteredData = await Log.find({ ...combinedFilter });
        res.status(200).json({ search: filteredData });
    } catch (err) {
        res.status(500).json({ search: [] });
    }
});

module.exports = app;