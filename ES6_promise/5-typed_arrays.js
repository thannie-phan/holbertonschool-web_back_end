export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length); // arraybuffer store bytes by creating creates a block of raw memory with a fixed size, size here is length
    const view = new Int8Array(buffer); //int8array is a type array which write bytes
    if (position < 0 || position >= view.length) {
        throw new Error('Position outside range');
    }
    view[position] = value;

    return new DataView(buffer); // dataview is a type array which read bytes
}
