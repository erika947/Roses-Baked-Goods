const mongoose = require('mongoose');

const BakedGoodsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    
});

const BakedGoods = mongoose.model('BakedGoods', BakedGoodsSchema);

module.exports = BakedGoods;
