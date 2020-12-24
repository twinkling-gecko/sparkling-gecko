import { Router } from 'express'
import sessionsRouter from './sessions'
import usersRouter from './users'

const router = Router()

router.use('/sessions', sessionsRouter)
router.use('/users', usersRouter)

export default router
