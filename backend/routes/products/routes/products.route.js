const express = require('express')
const { gets } = require('../controllers/products.controller')
const { validationBody } = require('../../middlewares/validation.middleware')
const { query } = require('express-validator')

const router = express.Router()

// get all products
router.get('/',
  query('page')
    .notEmpty().withMessage('Param page is empty')
    .isNumeric().withMessage('Param page must be number')
    .optional()
    .escape()
    .trim()
  , query('perPage')
    .notEmpty().withMessage('Param perPage is empty')
    .isNumeric().withMessage('Param perPage must be number')
    .optional()
    .default(10)
    .escape()
    .trim()
  , validationBody, gets)


module.exports = router
