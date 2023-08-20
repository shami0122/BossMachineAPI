const express = require('express');
const { getAllFromDatabase, getFromDatabaseById } = require('./db');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(getFromDatabaseById('minions', req.params.minionId));
})

module.exports = minionsRouter;