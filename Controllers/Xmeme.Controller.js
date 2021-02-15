const createError = require('http-errors');
const mongoose = require('mongoose');

const Xmeme = require('../Models/Xmeme.model');

module.exports = {
    getLatest100Memes: async (req, res, next) => {
        try {
            const results = await Xmeme.find({}).sort({_id:-1}).limit(100);
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },

    createNewMeme: async (req, res, next) => {
        try {
            const xmeme = new Xmeme(req.body);
            const result = await xmeme.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    }
};