import { Router } from 'express'
import sessionsRouter from './sessions'
import usersRouter from './users'
import itemValuesRouter from './item_values'

const router = Router()

router.use('/sessions', sessionsRouter)
router.use('/users', usersRouter)
router.use('/item_values', itemValuesRouter)

export default router
