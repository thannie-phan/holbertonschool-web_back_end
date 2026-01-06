export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // hint === "number" | "string" | "default"
    // Use the value of Symbol.toPrimitive as the method name.
    // This method is used when class is cast from obj into a number or string. Without this method, JS tries (in this order): valueOf(), then toString()

    [Symbol.toPrimitive](hint) {

        // If you want a number, take size”. If you want a string, take location. 
        if (hint === 'number') return this._size;
        if (hint === 'string') return this._location;
        return this._size;
    }
}
