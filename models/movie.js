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
    apiId: Number,
    title: String,
    genres: [ String ], 
    poster: String,
    background: String, 
    overview: String,
    release: String,
    runTime: Number, 
    trailerKey: String,
    reviews: [ reviewSchema ],
    stars: Number, 
},  {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);