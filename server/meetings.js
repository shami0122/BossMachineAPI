const express = require('express');
const { getAllFromDatabase, createMeeting, addToDatabase, deleteAllFromDatabase } = require('./db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res) => {
    res.send(getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res) => {
    const newMeetings = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeetings);  
})

meetingsRouter.delete('/', (req, res) => {
    const meetings = deleteAllFromDatabase('meetings');
    if(meetings){
        res.status(204).send();    
    }else{
        res.status(404).send();
    }
})

module.exports = meetingsRouter;