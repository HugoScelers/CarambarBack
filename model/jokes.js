const jokes = require('../jokes.json');

class jokes {
    static getAll() {
        return jokes;
    }

    static getById(id) {
        return jokes.find((jokes) => jokes.id === id);
    }

    static getRandom() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
    }
}

module.exports = jokes;
