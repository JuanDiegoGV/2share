const express = require('express')
const router = express.Router()

router.use('/', require('./routes/products.route'))

module.exports = router
