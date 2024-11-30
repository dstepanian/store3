const mongoose = require('mongoose')

const storeItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    price: { type: Number, required: true },
    description: { type: String},
    madeIn: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true},
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true},
})

module.exports = mongoose.model('StoreItem', storeItemSchema);
