import 'dotenv/config'

export default async function searchContent(keywords) {

    const apiKey = process.env.TMDB_API_KEY || null;
    if (apiKey === null) {
        console.error("an API key is needed in the fiel TMDB_API_KEY of the .env");
    }

    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=fr-FR&page=1&query='+ keywords;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer '+ apiKey
        }
    };

    let reqRes;

    await fetch(url, options)
        .then(res => res.json())
        .then(json => reqRes = json)
        .catch(err => console.error(err));
    
    return reqRes;
}