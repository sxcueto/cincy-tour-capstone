const mongoose = require('mongoose');

const outdoorsSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    imgUrl:{type: String},
    address:{type: String},
    website:{type: String}
});

const Outdoors = mongoose.model('Outdoors', outdoorsSchema);

module.exports =   Outdoors
