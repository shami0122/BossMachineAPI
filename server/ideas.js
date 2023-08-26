const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const ideasRouter = express.Router();

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if(idea){
        req.idea = idea;
        next();
    }
    else{
        res.status(404).send();
    } 
})

ideasRouter.get('/', (req, res) => {
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res) => {
    const ideas = addToDatabase('ideas', req.body);
    res.status(201).send(ideas);  
})

ideasRouter.get('/:ideaId', (req, res) => {
    res.send(req.idea);  
})

ideasRouter.put('/:ideaId', (req, res) => {
    const idea = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(idea);
});

ideasRouter.delete('/:ideaId', (req, res) => {
    const idea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if(idea){
        res.status(204).send();    
    }else{
        res.status(404).send();
    }
})

module.exports = ideasRouter;