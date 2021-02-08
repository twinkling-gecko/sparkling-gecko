import { Router } from 'express'
import sessionsRouter from './sessions'
import usersRouter from './users'
import itemValuesRouter from './item_values'
import itemsRouter from './items'

const router = Router()

router.use('/sessions', sessionsRouter)
router.use('/users', usersRouter)
router.use('/item_values', itemValuesRouter)
router.use('/items', itemsRouter)

export default router
