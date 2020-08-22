const express = require('express');
const app = express();
const locationRoutes = require('./routes/locationRoutes');

const SERVER_PORT = 3000;

app.use(express.json());

locationRoutes(app);

/**
 * Put the server listening to requests on port 3000.
 */
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));