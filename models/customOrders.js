const mongoose = require('mongoose');

const CustomOrderSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    email: { type: String, required: true },
    Phone: { type: String, required: true },
    customize: { type: String, required: true },
});

const CustomOrder = mongoose.model('CustomOrder', CustomOrderSchema);

module.exports = CustomOrder;
