const Location = require('../model/Location');
const redis = require('redis');

/**
 * Get all locations from REDIS.
 * @returns {Array} Locations list.
 */
const getLocations = () => {

}

/**
 * Save a new location on REDIS.
 * @param {Object} locationProps Location properties.
 * @returns {Location} Location object.
 */
const createLocation = (locationProps) => {

}

/**
 * Get location by the given name.
 * @param {String} name Location name.
 * @return {Location} Location object.
 */
const getLocationByName = (name) => {

}

module.exports = {
    getLocations,
    createLocation,
    getLocationByName
};