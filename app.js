const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

// Initialize DB
require('./initDB')();

const XememRoute = require('./Routes/Xmeme.route');
app.use('/memes', XememRoute);

app.use((req, res, next) => {
    res.end();
    next(err);
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});