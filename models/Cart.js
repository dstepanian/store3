const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const cartSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'StoreItem' },
            quantity: { type: Number, default: 1 }
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema)