const locationServices = require('../services/locationServices');

/**
 * Get all locations.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
const getLocations = (req, res) => {
    const locations = locationServices.getLocations();

    res.status(200).json({ data: locations });
}

/**
 * Create a new Location.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
const createLocation = (req, res) => {
    const { parentName, name, areaM2 } = req.body;

    if (parentName && name && areaM2) {
        const locationProps = { parentName, name, areaM2 };

        const location = locationServices.createLocation(locationProps);

        res.status(201).json({ data: location });
    } else {
        res.status(400).json({ error: 'Bad body request' });
    }
}

/**
 * Middleware to verify if a location already exists.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const validateIfLocationExists = (req, res, next) => {
    const { name } = req.body;
    const location = locationServices.getLocationByName(name);

    if (location) res.status(409).json({ error: `The location with name ${name} already exists` })
    else res.status(204).json({});
}

module.exports = {
    getLocations,
    createLocation,
    validateIfLocationExists
};