const Location = require('../model/Location');
const redisDb = require('../config/redisDb');

/**
 * Get all locations from REDIS.
 * @returns {Promise} Locations list.
 */
const getLocations = async () => await redisDb.getLocations();

/**
 * Save a new location on REDIS.
 * @param {Object} locationProps Location properties.
 * @returns {Promise} Location object.
 */
const createLocation = async (locationProps) => {
    const { parentName, name, areaM2 } = locationProps;
    const location = new Location(parentName, name, areaM2);

    try {
        await redisDb.saveLocation(location);
    } catch (error) {
        console.log(error.message);
    }

}

/**
 * Get location by the given name.
 * @param {String} name Location name.
 * @return {Location} Location object.
 */
const getLocationByName = async (name) => await redisDb.getLocationByName(name);

module.exports = {
    getLocations,
    createLocation,
    getLocationByName
};