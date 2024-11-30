const Category = require('../models/Category')

const createCategory = async (req, res, next) => {
    try {
        const category = await Category.create(req.body)
        res.status(201).json({ success: true, data: category })
    } catch (e) {
        console.log(e);
    }
}

module.exports = createCategory();