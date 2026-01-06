export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }

        this._sqft = sqft;
        
        // new.target checks if instance is not a direct Building class
        // if the evacuationwarningmessage function of the instance is same as the default evac plan of the building class
        // then throw error
        if (new.target !== Building) {
            if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
                throw new Error('Class extending Building must override evacuationWarningMessage');
            }
        }
    }

    // getter
    get sqft() {
        return this._sqft;
    }

    // abstract method
    evacuationWarningMessage() {
        throw new Error('Subclasses must have evacuationWarningMessage');
    }
}

