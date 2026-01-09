import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
    return promise
        .then((results) => { // if promise is all resolved
            const photo = results[0];
            const user = results[1];

            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => { // if not
            console.log('Signup system offline');
        });
}
