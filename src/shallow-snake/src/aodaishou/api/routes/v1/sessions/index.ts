import { Router } from 'express'
import passport from 'passport'
import { User } from '../../../entity/User'
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
router.post('/new', (req, res) => {
  passport.authenticate(
    'local',
    {
      session: true,
    },
    (_err, user, info) => {
      if (user) {
        req.logIn(user, () => {
          res.status(200).json({ message: 'success' })
        })
      } else {
        res.status(400).json({ message: info.message })
      }
    }
  )(req, res)
})

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
