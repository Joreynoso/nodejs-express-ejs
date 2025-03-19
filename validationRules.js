// validation rules
import { body } from 'express-validator'

export const registerValidationRules = () => [
  body('email').isEmail().withMessage('please enter a valid email').normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('password must be at leas 6 charactares')
    .trim()
    .escape(),
  body('username')
    .notEmpty()
    .withMessage('username is required')
    .isAlphanumeric()
    .withMessage('username must be alphanumeric')
    .trim()
    .escape(),
]
