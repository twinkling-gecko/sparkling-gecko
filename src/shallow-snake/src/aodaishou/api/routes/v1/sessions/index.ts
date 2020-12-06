import { Router } from 'express'
import { User } from '../../../entity/User'
import passport from 'passport'
import '../../../passport'
import isAuthenticated from '../../../middleware/isAuthenticated'

const router = Router()

/**
 * @swagger
 * /api/v1/sessions/new:
 *   post:
 *     tags: [v1]
 *     description: login
 *     responses:
 *       200:
 *         examples:
 *           result:
 *             message: string
 */
router.post(
  '/new',
  passport.authenticate('local', {
    session: true,
  }),
  (_, res) => {
    res.status(200).json({ message: 'success' })
  }
)

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
router.get('/me', isAuthenticated, (req, res) => {
  type UserResponse = {
    email: string
  }
  const user: User | undefined = req.user as User
  const userResponse: UserResponse = {
    email: user.email,
  }

  if (!user) res.status(404).json({ message: 'no applicable user found' })

  res.status(200).json(userResponse)
})

export default router
