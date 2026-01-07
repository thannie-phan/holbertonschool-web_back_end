export default function cleanSet(set, startString) {

if (!startString || typeof startString !== 'string') {
 // if nothing in start string, return null
    return '';
}

const result = []; // put result into an array

for (const value of set) {
    if (value.startsWith(startString)) { // if what's in set start with the string, then remove that part out
        const cleanedValue = value.slice(startString.length);
        result.push(cleanedValue); // put the rest to the result array
    }
}

return result.join('-');
}