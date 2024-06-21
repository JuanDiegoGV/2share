const express = require('express')
const { gets, get, post, remove, put } = require('../controllers/userProducts.controller')
const { validationBody } = require('../../middlewares/validation.middleware')
const { query, param, body } = require('express-validator')

const router = express.Router()

// get all userProducts
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

// get one userProduct
router.get('/:id',
  param('id')
    .exists().withMessage('Param id is required')
    .notEmpty().withMessage('Param id is empty')
    .escape()
    .trim(),
  validationBody, get)

// create userProducts
router.post('/',
  body('productId')
    .exists().withMessage('Field productId is required')
    .notEmpty().withMessage('Field productId is empty')
    .isNumeric().withMessage('Field productId must be number')
    .escape()
    .trim(),
  validationBody, post)

  // update userProducts status
router.put('/:id',
  param('id')
    .exists().withMessage('Param id is required')
    .notEmpty().withMessage('Param id is empty')
    .escape()
    .trim(),
  body('state')
    .exists().withMessage('Field state is required')
    .notEmpty().withMessage('Field state is empty')
    .isString().withMessage('Field state must be string')
    .escape()
    .trim(),
  validationBody, put)

// delete userProducts
router.delete('/:productId',
  param('productId')
    .exists().withMessage('Field productId is required')
    .notEmpty().withMessage('Field productId is empty')
    .escape()
    .trim(),
  validationBody, remove)

module.exports = router
