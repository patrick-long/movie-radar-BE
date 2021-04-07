const Movie = require('../models/movie');

const index = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies); // sends an HTTP response with json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}

module.exports = {
    index
}