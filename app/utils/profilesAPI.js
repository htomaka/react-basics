/**
 * Created by htomaka on 16/10/16.
 */
const ENDPOINT = 'http://localhost:8080/profiles';

export function getProfiles () {
    return fetch (ENDPOINT)
        .then (res => res.json ())
        .catch (err => {
            console.log (err)
        })
}