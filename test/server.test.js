const assert = require('assert');
const Location = require('../model/Location');
const locationServices = require('../services/locationServices');

describe('Redis tests', () => {
    let locationProps;
    let location;
    before(async () => {
        locationProps = {
            'parentName': 'Parent location',
            'name': 'Location name',
            'areaM2': 25
        };
    })
    it('Should save a new Location', async () => {
        locationServices.createLocation(locationProps);

        location = await locationServices.getLocationByName('Location name');

        assert.equal(location._name, 'Location name');
    });

    it('Should return a location by it\'s name', async () => {
        location = await locationServices.getLocationByName('Location name');

        assert.equal(location._name, 'Location name');
    });
    it('Should return an array of locations', async () => {
        const locations = await locationServices.getLocations();

        assert.equal(typeof locations, 'object');
    });
    it('Should have a size greater than zero', async () => {
        const locations = await locationServices.getLocations();

        assert.equal(locations.length > 0, true);
    });
});