const StoreItem = require('../models/StoreItem')

const createStoreItem = async (req, res, next) => {
    try {
        const storeItem = await StoreItem.create(req.body)
        res.status(201).json({ success: true, data: storeItem })
    } catch (e) {
        console.log(e);
    }
}

// const getStoreItem = async (req,res,next) => {
//     try {
//         const { title } = req.query
//
//         const filter = {}
//     } catch (e) {
//         console.log(e);
//     }
// }

module.exports = { createStoreItem }
