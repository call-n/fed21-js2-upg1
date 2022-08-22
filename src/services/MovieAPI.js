import axios from 'axios'
const NODE_ENV = process.env.NODE_ENV;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const movieImagesEndpoint = 'https://image.tmdb.org/t/p/w500/'

const api_key = import.meta.env.VITE_API_KEY


const get = async (endpoint) => {
    const res = await axios.get(endpoint)

    return res.data
}

const getAllPopular = () => {
    return get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`)
}

const getAllTop = () => {
    return get(`/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
}

const getAllLatest = (page) => {
    return get(`/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`)
}

const getGenre = (genre) => {
    return get(`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`)
}

const getMovie = (id) => {
    return get(`/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=credits`)
}

const getActor = (id) => {
    return get(`/person/${id}?api_key=${api_key}&language=en-US`)
}

const getActorMovies = (id) => {
    return get(`/discover/movie?api_key=47057a0ed878bc6c7751043ab8574a22&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=${id}&with_watch_monetization_types=flatrate`)
}


const exports = {
    movieImagesEndpoint,
    getAllPopular,
    getAllTop,
    getAllLatest,
    getGenre,
    getMovie,
    getActor,
    getActorMovies,
}

export default exports