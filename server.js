const express = require('express');
const app = express();

const SERVER_PORT = 3000;

/**
 * Put the server listening to requests on port 3000.
 */
app.listen(SERVER_PORT, () => `Server listening on port ${SERVER_PORT}`);