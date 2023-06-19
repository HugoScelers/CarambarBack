const Joke = require('../model/Joke');

// Récupérer toutes les blagues
const getAllJokes = (req, res) => {
    res.json(Joke.getAll());
};

// Récupérer une blague par ID
const getJokeById = (req, res) => {
    const id = Number(req.params.id);
    const joke = Joke.getById(id);
    if (joke) {
        res.json(joke);
    } else {
        res.status(404).json({ error: 'Blague non trouvée' });
    }
};

// Récupérer une blague au hasard
const getRandomJoke = (req, res) => {
    const joke = Joke.getRandom();
    res.json(joke);
};

module.exports = {
    getAllJokes,
    getJokeById,
    getRandomJoke,
};
