export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => { // when resolve
            return {
                status: 200,
                body: 'success',
            };
        })
        .catch(() => { // when reject
            return new Error();
        })
        .finally(() => { // for every resolution
            console.log('Got a response from the API');
        });
}
