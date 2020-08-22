class Location {
    /**
     * Location constructor.
     * @param {String} parentLocation Parent location.
     * @param {String} name Location name.
     * @param {Number} areaM2 Location area in M2.
     */
    constructor(parentLocation, name, areaM2) {
        this._parentLocation = parentLocation;
        this._name = name;
        this._areaM2 = areaM2;
    }

    get parentLocation() {
        return this._parentLocation;
    }

    get name() {
        return this._name;
    }

    get areaM2() {
        return this._areaM2;
    }

    set name(name) {
        this.name = name;
    }

    set areaM2(areaM2) {
        this.areaM2 = areaM2;
    }
}

module.exports = Location;