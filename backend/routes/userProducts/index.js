const express = require('express')
const router = express.Router()

router.use('/', require('./routes/userProducts.route'))

module.exports = router
