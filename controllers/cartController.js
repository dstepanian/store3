const Cart = require('../models/Cart')

const addToCart = async (req, res, next) => {
    try {
        console.log(req.user)
        const cart = await Cart.findOne({ userId: req.user.id })
        console.log(cart);
        if (!cart) {
            const cart = new Cart({ userId: req.user.id })


            await cart.save()
            console.log(cart)
        }

        res.status(200).json({ success: true, message: 'OK' })
    } catch (e) {
        console.log(e);
    }

}




module.exports = { addToCart }