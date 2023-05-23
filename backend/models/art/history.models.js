const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    imgUrl:{type: String},
    address:{type: String},
    website:{type: String}
});

const History = mongoose.model('History', historySchema);

module.exports =   History
