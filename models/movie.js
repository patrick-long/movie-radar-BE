const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true,
    }
},  {
    timestamps: true
})

const movieSchema = new Schema({
    backdrop_path: String,
    genres: [{
        id: String,
        name: String,
    }],
    homepage: String,
    id: Number,
    title: String,
    overview: String,
    poster_path: String,
    release_date: String,
    runtime: Number,
    videos: {
        results: [{
            key: String,
        }]
    },
    reviews: [ reviewSchema ],
    stars: Number, 
},  {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);