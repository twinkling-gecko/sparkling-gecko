import { Router } from 'express'
import { validate } from 'class-validator'
import { User } from '../../../entity/User'
import { SignupBody } from '../../../validators'
import { UsersHandler } from '../../../handler/users_handler'

const router = Router()

/**
 * @swagger
 * /api/v1/users/new:
 *   post:
 *     tags: [v1]
 *     description: user signup
 */
router.post('/new', async (req, res) => {
  // リクエストの確認
  const signupBody = new SignupBody()
  signupBody.email = req.body.email
  signupBody.password = req.body.password

  const errors = await validate(signupBody)
  if (errors.length > 0) {
    return res
      .status(400)
      .json({ errorMessage: 'Invalid params', validateError: errors })
  }

  // emailの重複確認
  const userByEmail = await User.find({ email: signupBody.email })
  if (userByEmail.length > 0) {
    return res.status(400).json({ errorMessage: 'This email is already exist' })
  }

  try {
    await UsersHandler.createUser(signupBody.email, signupBody.password)
    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Internal server error' })
  }
})

export default router
