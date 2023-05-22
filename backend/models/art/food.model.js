const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    imgUrl:{type: String},
    address:{type: String}
});

const Food = mongoose.model('Food', foodSchema);

module.exports = {
  Food,
};