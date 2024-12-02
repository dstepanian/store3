const {Router} = require('express')
const router = Router();
const {addToCart} = require('../controllers/cartController')
const {authMiddleware} = require("../middlewares/authMiddleware");


router.patch('/', authMiddleware, addToCart)

module.exports = router;