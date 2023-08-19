const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

module.exports = apiRouter;
