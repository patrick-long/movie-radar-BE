// require modules
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const cors = require('cors');


// initialize the express app 
const app = express();


// configure settings using app.set()
// TODO: require and config .env file
require('dotenv').config();
// TOOD: require database module
// require('./config/database');


// mount middleware using app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());


// mount routes with app.use()
app.use('/', require('./routes/api/movies'));


// tell the app to listen on port 3000
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})

