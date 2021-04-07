const mongoose = require('mongoose'); 

mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', (req, res) => {
    console.log(`MongoDB connected on ${db.host}:${db.port}`)
});