const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) throw new Error("Not authorized!")

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ success:false, message: e.message })
    }
}

module.exports = { authMiddleware }