const jokes = require('../jokes.json');

// Récupérer toutes les blagues
const getAllJokes = (req, res) => {
    res.json(jokes);
};

// Récupérer une blague par ID
const getJokeById = (req, res) => {
    const id = Number(req.params.id);
    const joke = jokes.find((joke) => joke.id === id);
    if (joke) {
        res.json(joke);
    } else {
        res.status(404).json({ error: 'Blague non trouvée' });
    }
};

// Récupérer une blague au hasard
const getRandomJoke = (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    res.json(joke);
};

module.exports = {
    getAllJokes,
    getJokeById,
    getRandomJoke,
};
