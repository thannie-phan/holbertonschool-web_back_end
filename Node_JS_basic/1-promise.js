export default function getFullResponseFromAPI(success) {
    const newPromise = new Promise((resolve, reject) => {
        if (success === true) {
            resolve({ status: 200, body: 'Success' }); // resolve and passing a obj with 2 attributes
        } else {
            reject(new Error('The fake API is not working currently')); // reject and pass new error
        }
    });
    return newPromise;
}