const {Router} = require('express')
const router = Router()

const authRoutes = require ('./authRoutes')
const cartRoutes = require('./cartRoutes')
const productRoutes = require('./productRoutes')

router.use('/auth', authRoutes)
router.use('/cart', cartRoutes)
router.use('/products', productRoutes)

module.exports = router;