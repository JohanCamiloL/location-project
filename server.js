const express = require('express');
const app = express();
const cors = require('cors');
const locationRoutes = require('./routes/locationRoutes');

const SERVER_PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

locationRoutes(app);

/**
 * General error handler middleware.
 */
app.use((error, _, res, next) => {
    if (error) {
        console.log(err);
        res.json(500).send({ message: 'Internal error' });
    } else {
        next();
    }
});

/**
 * Put the server listening to requests on port 3000.
 */
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));