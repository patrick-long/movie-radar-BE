const Movie = require('../models/movie');
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
        const movies = await Movie.find({});
        res.status(200).json(movies); // sends an HTTP response with json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}

const genresCreate = async (req, res) => {
    try {
        const genreSearch = await axios.get(process.env.API_GENRES_URL).then(response => console.log(response));
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