const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Xmeme data model
const XmemeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Xmeme = mongoose.model('xmemes', XmemeSchema);
module.exports = Xmeme;