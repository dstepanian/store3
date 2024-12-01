const {Router} = require('express')
const {createStoreItem, getStoreItems} = require("../controllers/storeItemController");
const router = Router()

router.post('/create', createStoreItem)
router.get('/', getStoreItems)

module.exports = router;