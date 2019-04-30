const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use('/api/v1', v1);
v1.get('/people', (request, response) => {
    const data = peopleService.getPeople();
    response.send(data);
});
v1.get('/people/:gender', (request, response) => {
  const filtre = request.params.gender;
  try {
      const people = peopleService.getPeople(filtre);
      people ? response.send(people) : response.sendStatus(404);
  } catch (error) {
      response.sendStatus(400).end(error);
  }
});
v1.get('/people/:id', (request, response) => {
    const id = request.params.id;
    try {
        const people = peopleService.updatePeople(id);
        people ? response.send(people) : response.sendStatus(404);
    } catch (error) {
        response.sendStatus(400).end(error);
    }
});

module.exports = app;
