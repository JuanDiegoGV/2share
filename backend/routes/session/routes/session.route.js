const express = require('express')
const { post } = require('../controllers/session.controller')
const { validationBody } = require('../../middlewares/validation.middleware')
const { body } = require('express-validator')

const router = express.Router()

// login
router.post('/',
  body('username')
    .exists().withMessage('Field username is required')
    .notEmpty().withMessage('Field username is empty')
    .isString().withMessage('Field username must be string')
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
