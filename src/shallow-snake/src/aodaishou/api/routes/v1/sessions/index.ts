import { Router } from 'express'
import passport from 'passport'
import '../../../passport'
import isAuthenticated from '../../../middleware/isAuthenticated'

const router = Router()

/**
 * @swagger
 * /api/v1/sessions:
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
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    session: true,
  }),
  (_, res) => {
    res.json({ message: 'success' })
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
