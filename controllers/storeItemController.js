const StoreItem = require('../models/StoreItem')

const createStoreItem = async (req, res, next) => {
    try {
        const storeItem = await StoreItem.create(req.body)
        res.status(201).json({ success: true, data: storeItem })
    } catch (e) {
        console.log(e);
    }
}

const getStoreItems = async (req,res,next) => {
    try {
        const filtersQuery = req.query

        const filters = {}

        for (const filter in filtersQuery) {
            console.log(filter, filtersQuery[filter])
            switch (filter) {
                case "title":
                    filters['title'] = {$regex: new RegExp(filtersQuery[filter], 'i')}
                    break
                case "madeIn":
                    filters['madeIn'] = filtersQuery[filter]
                    break
                case "category":
                    filters['category'] = filtersQuery[filter]
                    break
                case "price":
                    const splitted = filtersQuery[filter]
                        .includes('-') && filtersQuery[filter]
                        .split('-').map(item => !isNaN(parseFloat(item)) && parseFloat(item))
                        .sort((a,b) => a-b)

                    const min = splitted[0]
                    const max = splitted[1]

                    // filters['price'] = {$gte: min, $lte: max}
                    filters['$and'] = [
                        {price: {$gte: min}},
                        {price: {$lte: max}},
                    ]

                    break
                default:
                    break
            }
        }

        const storeItems = await StoreItem.find(filters)
        res.status(201).json({ storeItems })
    } catch (e) {
        console.log(e);
    }
}

module.exports = { createStoreItem, getStoreItems }
