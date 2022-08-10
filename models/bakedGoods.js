const mongoose = require('mongoose');

const BakedGoodsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    email: { type: String, required: true },
    customize: { type: String, required: true },
    image: { type: String, required: true },
});

const BakedGoods = mongoose.model('BakedGoods', BakedGoodsSchema);

module.exports = BakedGoods;
