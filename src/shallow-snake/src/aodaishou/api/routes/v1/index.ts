import { Router } from 'express'
import sessionsRouter from './sessions'
import usersRouter from './users'
import itemsRouter from './items'

const router = Router()

router.use('/sessions', sessionsRouter)
router.use('/users', usersRouter)
router.use('/items', itemsRouter)

export default router
