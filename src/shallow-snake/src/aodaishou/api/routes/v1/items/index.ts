import { Router, Request } from 'express'
import { validate } from 'class-validator'
import { ItemBody } from '../../../validators'
import '../../../passport'
import isAuthenticated from '../../../middleware/isAuthenticated'
import { Item, User } from '../../../entity'
import { ItemHandler } from '../../../handler/items_handler'

const router = Router()

/**
 * @swagger
 * /api/v1/sessions/new:
 *   post:
 *     tags: [v1]
 *     description: item creation
 *     responses:
 *       200:
 *         examples:
 *           result:
 *             message: string
 */
router.post('/new', isAuthenticated, async (req: Request, res) => {
  const user = req.user as User
  const itemBody = new ItemBody()
  itemBody.name = req.body.name
  itemBody.imageUrl = req.body.imageUrl

  let errors = await validate(itemBody)
  if (errors.length > 0)
    return res
      .status(400)
      .json({ message: 'Invalid params', validateError: errors })

  // TODO: fix name
  const newItem = new Item()
  newItem.name = itemBody.name
  newItem.imageUrl = itemBody.imageUrl
  newItem.user = user

  errors = await validate(newItem)
  if (errors.length > 0) return res.status(400).json({ errors })

  try {
    newItem.save()
    return res.status(200).json({ message: 'success' })
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.patch('/:id', isAuthenticated, async (req, res) => {
  const id = parseInt(req.params.id)
  const itemBody = new ItemBody()
  itemBody.name = req.body.name
  itemBody.imageUrl = req.body.imageUrl

  const errors = await validate(itemBody)
  if (errors.length > 0)
    return res
      .status(400)
      .json({ message: 'Invalid params', validateError: errors })

  try {
    const users = await ItemHandler.updateItem(
      id,
      req.user as User,
      itemBody.name,
      itemBody.imageUrl
    )
    res.status(200).json(users)
  } catch (errors) {
    res.status(400).json(errors)
  }
})

router.get('/:id', isAuthenticated, async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const item = await Item.findOne(id)
    res.status(200).json(item)
  } catch (errors) {
    res.status(400).json(errors)
  }
})

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const users = await Item.find({ user: req.user })
    res.status(200).json(users)
  } catch (errors) {
    res.status(400).json(errors)
  }
})

export default router
