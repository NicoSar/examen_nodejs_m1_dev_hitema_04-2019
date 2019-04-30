const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        console.log(id);
    }

    getPeople(filters) {
     console.log("filters :", filters);

      return this.peoples;
    }
}
