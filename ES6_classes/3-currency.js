export default class Currency{
    constructor(code, name) {
        // type checks for code
        if (typeof code!== 'string') {
            throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        // store all the attributes
        this._name = name;
        this._code = code;
    }

    // GETTERS AND SETTERS
    get code() { return this._code; }

    set code(newCode) {
        this._code = newCode;
    }

    get length() { return this._length; }

    set length(newLength) {
        this._length = newLength;
    }

    get name() { return this._name; }

    set name(newName) {
        this._code = newName;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}