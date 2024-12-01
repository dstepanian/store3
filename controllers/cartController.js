const Cart = require('../models/Cart')

const addToCart = async (req,res,next) => {
    try {
        const { productId, qunatity } =req.body
        const userId = req.user.id

        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = await Cart.create({ userId, products: [{ productId, qunatity }] })
        // } else {
        //     const productIndex =
        // }

    } catch (e) {
        console.log(e);
    }
}