const locationController = require('../controller/locationController');

/**
 * Location REST routes.
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.get('/locations');

    app.post('/locations');

    app.put('/locations/:id');
}