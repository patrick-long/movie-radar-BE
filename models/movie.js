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
},  {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);