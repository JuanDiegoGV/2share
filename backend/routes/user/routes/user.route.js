const express = require('express')
const { post } = require('../controllers/user.controller')
const { validationBody } = require('../../middlewares/validation.middleware')
const { body } = require('express-validator')

const router = express.Router()

// create user
router.post('/',
  body('username')
    .exists().withMessage('Field username is required')
    .notEmpty().withMessage('Field username is empty')
    .isEmail().withMessage('Field username must be email')
    .escape()
    .trim(),
  body('fullname')
    .exists().withMessage('Field fullname is required')
    .notEmpty().withMessage('Field fullname is empty')
    .isString().withMessage('Field fullname must be string')
    .escape()
    .trim(),
  body('password')
    .exists().withMessage('Field password is required')
    .notEmpty().withMessage('Field password is empty')
    .isString().withMessage('Field password must be string')
    .escape()
    .trim(),
  validationBody, post)


module.exports = router
