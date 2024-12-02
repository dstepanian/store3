const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const cartItemSchema = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'StoreItem' },
    quantity: { type: Number, default: 1 }
})

const cartSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    products: { type: [cartItemSchema], default: []}
})

module.exports = mongoose.model('Cart', cartSchema)