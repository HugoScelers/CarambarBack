const express = require('express');
const cors = require('cors');
const app = express();

const jokesRoutes = require('./routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Configuration de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
