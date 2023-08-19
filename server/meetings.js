const express = require('express');
const { getAllFromDatabase } = require('./db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

module.exports = meetingsRouter;