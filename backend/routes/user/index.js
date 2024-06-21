const express = require('express')
const router = express.Router()

router.use('/', require('./routes/user.route'))

module.exports = router
