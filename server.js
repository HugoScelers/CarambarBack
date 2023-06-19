const express = require('express');
const cors = require('cors');
const app = express();

const jokesRoutes = require('./routes');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Définition des options Swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de blagues',
      version: '1.0.0',
      description: 'Une API pour obtenir des blagues aléatoires.',
    },
  },
  apis: ['./routes/index.js'],
};

const swaggerSpec = swaggerJsdoc(options);

// Configuration de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware pour parser les données JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

// Routes pour les blagues
app.use('/', jokesRoutes);

// Gestion de la page 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/view/404.html');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
