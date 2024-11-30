const {Router} = require('express')
const {createStoreItem} = require("../controllers/storeItemController");
const router = Router()

router.post('/create', createStoreItem)

module.exports = router;