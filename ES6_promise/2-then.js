export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success === true) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    }).then((response) => { // looks like Promise.resolve(42).then(logValue);
        console.log('Got a response from the API');
        return response;
    });
}
