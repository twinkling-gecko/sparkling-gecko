import { Router } from 'express'
const router = Router()

/**
 * @swagger
 * /api/v1:
 *   get:
 *     tags: [v1]
 *     description: get
 *     responses:
 *       200:
 *         description: get test
 *         examples:
 *           result:
 *             message: string
 */
router.get('/', (req, res) => {
  res.json({ message: 'this is v1 router' })
})

export default router
