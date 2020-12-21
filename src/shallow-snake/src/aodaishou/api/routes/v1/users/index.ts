import { Router } from 'express'
import { User } from '../../../entity/User'
import {
  validate,
  IsEmail,
  IsString,
  MinLength,
  Matches,
} from 'class-validator'
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
  let requestedUser = new RequestedUser()
  requestedUser.email = req.body.email
  requestedUser.password = req.body.password

  let errors = await validate(requestedUser)
  if (errors.length > 0) {
    return res.status(400).json(errors)
  }

  // ユーザーオブジェクト作成
  let signupUser = new User()
  signupUser.email = requestedUser.email
  signupUser.encrypted_password = await hashFromPlain(requestedUser.password)

  errors = await validate(signupUser)
  if (errors.length > 0) {
    return res.status(400).json(errors)
  }

  try {
    const signupedUser = await signupUser.save()
    return res.json({ email: signupedUser?.email })
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

const hashFromPlain = async (plain: string): Promise<string> => {
  return await bcrypt.hash(plain, 10)
}

class RequestedUser {
  @IsEmail()
  email: string

  // 英数字大文字小文字一文字以上使用
  // 八文字以上
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z\d]*$/, {
    message:
      'Please use one or more single-byte uppercase letters and uppercase letters.',
  })
  password: string
}

export default router
