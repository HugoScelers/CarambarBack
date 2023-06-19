// routes/index.js
const express = require('express');
const router = express.Router();
const jokesController = require('../controller');

// Route pour consulter toutes les blagues
router.get('/jokes', jokesController.getAllJokes);

// Route pour consulter une blague par ID
router.get('/jokes/:id', jokesController.getJokeById);

// Route pour consulter une blague au hasard
router.get('/jokes/random', jokesController.getRandomJoke);

module.exports = router;
