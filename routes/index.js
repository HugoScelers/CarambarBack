const express = require('express');
const router = express.Router();
const jokesController = require('../controller');

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Retourne une blague au hasard
 *     responses:
 *       200:
 *         description: Une blague au hasard
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 */
router.get('/jokes/random', jokesController.getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Retourne une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Une blague par son ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 */
router.get('/jokes/:id', jokesController.getJokeById);

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Retourne toutes les blagues
 *     responses:
 *       200:
 *         description: La liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get('/jokes', jokesController.getAllJokes);

module.exports = router;
