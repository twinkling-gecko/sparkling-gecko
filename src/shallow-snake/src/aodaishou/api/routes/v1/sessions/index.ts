import { Router } from 'express'
import passport from 'passport'
import '../../../passport'

const router = Router()

/**
 * @swagger
 * /api/v1/sessions:
 *   post:
 *     tags: [v1]
 *     description: login
 *     responses:
 *       200:
 *         description: get test
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

export default router
