// server.js
const express = require('express');
const app = express();
const jokesRoutes = require('./routes');

// Middleware pour parser les données JSON
app.use(express.json());

// Routes pour les blagues
app.use('/api', jokesRoutes);

// Gestion de la page 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/view/404.html');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
