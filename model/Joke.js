const jokesData = require('../jokes.json');

class Joke {
    static getAll() {
        return jokesData;
    }

    static getById(id) {
        return jokesData.find((joke) => joke.id === id);
    }

    static getRandom() {
        const randomIndex = Math.floor(Math.random() * jokesData.length);
        return jokesData[randomIndex];
    }
}

module.exports = Joke;
