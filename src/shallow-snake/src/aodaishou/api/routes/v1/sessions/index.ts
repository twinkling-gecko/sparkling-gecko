import { Router } from 'express'
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
  res.status(200).json(req.user)
})

export default router
