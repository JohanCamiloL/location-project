const { promisify } = require('util');
const redis = require('redis');
const crypto = require('crypto');

const client = redis.createClient({
    port: 6379,
    host: 'localhost'
});

client.on('error', (error) => console.log(error));

const getAsync = promisify(client.hgetall).bind(client);

/**
 * Get all locations from redis DB.
 * @returns {Promise} Locations promise.
 */
const getLocations = async () => {
    const getKeys = promisify(client.keys).bind(client);
    const keys = await getKeys('*');

    const values = [];

    for (const key of keys) {
        values.push(await getAsync(key));
    }

    return values;
}

/**
 * Get a location from REDIS by the given name.
 * @param {String} name Location name.
 * @returns {Promise} Location promise.
 */
const getLocationByName = async (name) => {
    const hash = getHash(name);

    return await getAsync(hash);
}

/**
 * Save a location on REDIS.
 * @param {Location} location Location object.
 */
const saveLocation = async (location) => {
    const hashLocation = getHash(location.name);

    client.hmset(hashLocation, location, (error) => {
        console.log(error);
    });
}

/**
 * Returns a hash from the given location name.
 * @param {String} locationName Location name.
 * @returns {String} Location hash.
 */
const getHash = (locationName) => crypto.createHash('md5').update(locationName).digest('hex');

module.exports = {
    getLocations,
    getLocationByName,
    saveLocation
}