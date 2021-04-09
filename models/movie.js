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
    reviews: [ reviewSchema ],
    stars: Number, 
    backdropPath: String,
    genres: [String],
    overview: String,
    homePage: String,
    posterPath: String,
    trailerKey: String
},  {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);