require('dotenv').config()

module.exports = (req, res, next) => {
    const { authorization } = req.headers

    const password = process.env.API_KEY

    if(authorization === password) {
        next();
    } else {
        res.status(403).json({you: "have no power here"})
    }
    
    // next();
}