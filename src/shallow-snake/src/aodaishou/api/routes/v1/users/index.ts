import { Router } from 'express'
import { User } from '../../../entity/User'
import { SignupBody } from '../../../validators'
import { validate } from 'class-validator'
import bcrypt from 'bcrypt'

const router = Router()

/**
 * @swagger
 * /api/v1/sessions/me:
 *   get:
 *     tags: [v1]
 *     description: user description
 *     responses:
 *       200:
 *         examples:
 *           result:
 *             email: string
 */
router.post('/new', async (req, res) => {
  // リクエストの確認
  let signupBody = new SignupBody()
  signupBody.email = req.body.email
  signupBody.password = req.body.password

  let errors = await validate(signupBody)
  if (errors.length > 0) {
    return res.status(400).json(errors)
  }

  // emailの重複確認
  const userByEmail = await User.find({ email: signupBody.email })
  if (userByEmail.length > 0) {
    return res.status(400).json({ message: 'This email is already exist' })
  }

  // ユーザーオブジェクト作成
  let newUser = new User()
  newUser.email = signupBody.email
  newUser.encrypted_password = await toHashFromPlain(signupBody.password)

  errors = await validate(newUser)
  if (errors.length > 0) {
    return res.status(400).json(errors)
  }

  try {
    await newUser.save()
    return res.status(200).json({ message: "success" })
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

const toHashFromPlain = async (plain: string): Promise<string> => {
  return await bcrypt.hash(plain, 10)
}

export default router
