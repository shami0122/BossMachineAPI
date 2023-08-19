const express = require('express');
const { getAllFromDatabase } = require('./db');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

module.exports = minionsRouter;