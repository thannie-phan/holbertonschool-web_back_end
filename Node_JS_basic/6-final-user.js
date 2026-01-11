import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

    // use promise.allsettle to take and return an array of promises, waits til all finish, does not stop if one fail
    return Promise.allSettled(promises).then((results) => results.map((result) => ({ // map go through each result, transform it into a new obj and return a new array so it looks like the instruction result
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}




