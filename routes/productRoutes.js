const {Router} = require('express')
const {createStoreItem, getStoreItems, updateStoreItem, deleteStoreItem} = require("../controllers/storeItemController");
const router = Router()

router.post('/create', createStoreItem)
router.get('/', getStoreItems)
router.patch('/:id', updateStoreItem)
router.delete('/:id', deleteStoreItem)

module.exports = router;