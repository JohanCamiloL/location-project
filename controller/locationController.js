/**
 * Get all locations.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
const getLocations = (req, res) => {

}

/**
 * Create a new Location.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
const createLocation = (req, res) => {

}

/**
 * Middleware to verify if a location already exists.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const validateIfLocationExists = (req, res, next) => {

}

module.exports = {
    getLocations,
    createLocation,
    validateIfLocationExists
};