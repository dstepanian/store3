const Country = require('../models/Country')

const createCountry = async (req,res,next) => {
    try {
        const country = await Country.create(req.body)
        res.status(201).json({ success:true, data: country })
    } catch (e) {
        console.log(e);
    }
}

module.exports = createCountry()