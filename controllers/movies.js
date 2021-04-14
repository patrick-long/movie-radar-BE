const Movie = require('../models/movie');
const Genre = require('../models/genre');
const axios = require('axios');

const index = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies); // sends an HTTP response with json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}

const create = async (req, res) => {
    try {
        const roughMovieSearch = await axios.get(`${process.env.API_SEARCH_URL}${req.body.title}`).then(response => response.data.results[0].id);
        const specificMovieSearch = await axios.get(`https://api.themoviedb.org/3/movie/${roughMovieSearch}${process.env.API_ID_URL}`).then(response => response.data);
        await Movie.create(specificMovieSearch);
        index(req, res);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const genresIndex = async (req, res) => {
    try {
        const movies = await Genre.find({});
        res.status(200).json(movies); // sends an HTTP response with json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}

const genresCreate = async (req, res) => {
    try {
        const genreSearch = await axios.get(process.env.API_GENRES_URL).then(response => response.data.genres);
        const specificGenreSearch = genreSearch.find(genre => genre.name.toLowerCase() === req.body.genre);
        const movies = await axios.get(`${process.env.GENRES_SEARCH_URL}${specificGenreSearch.id}`).then(response => response.data.results);
        const specificMovies = movies.map(async movie => await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}${process.env.API_ID_URL}`).then(response => Genre.create(response.data)));
        genresIndex(req, res);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index,
    create,
    genresIndex,
    genresCreate
}