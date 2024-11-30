const Brand = require('../models/Brand')

const createBrand = async (req,res,next) => {
    try {
        const brand = await Brand.create(req.body)
        res.status(201).json({ success: true, data: brand })
    } catch (e) {
        console.log(e);
    }
}

module.exports = createBrand()