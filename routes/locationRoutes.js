const locationController = require('../controller/locationController');

/**
 * Location REST routes.
 * @param {import('express').Express} app 
 */
module.exports = (app) => {
    app.use('/locations', locationController.validateIfLocationExists);

    app.get('/locations', locationController.getLocations);

    app.post('/locations', locationController.createLocation);
}