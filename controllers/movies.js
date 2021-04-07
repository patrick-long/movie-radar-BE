const Movie = require('../models/movie');
const axios = require('axios');


const popular = async (req, res, next) => {
    try {
        const movies = await axios.get(`${process.env.API_POPULAR_URL}`).then(response => (response.data));
        res.status(200).json(movies);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

const upcoming = async (req, res, next) => {
    try {
        const movies = await axios.get(`${process.env.API_UPCOMING_URL}`).then(response => (response.data));
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

const search = async (req, res, next) => {
    try {
        const movies = await axios.get(`${process.env.API_SEARCH_URL}`).then(response => (response.data));
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

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
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
        index(req, res);
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'something went wrong' })
    }
}

module.exports = {
    index,
    create,
    popular,
    upcoming,
    search
}