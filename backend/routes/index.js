const express = require('express')
const router = express.Router()
const { verifyToken } = require('./middlewares/session.middleware')

// Session
router.use('/session', require('./session/index'))

// user
router.use('/user', require('./user/index'))

// userProducts
router.use('/userProducts', verifyToken, require('./userProducts/index'))

// products
router.use('/products', verifyToken, require('./products/index'))

module.exports = router
