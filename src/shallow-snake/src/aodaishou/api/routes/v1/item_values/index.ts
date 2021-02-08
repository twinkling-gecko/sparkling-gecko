import { Router } from 'express'
import passport from 'passport'
import { Item } from '../../../entity/Item'
import { ItemValue } from '../../../entity/ItemValue'
import isAuthenticated from '../../../middleware/isAuthenticated'

const router = Router()

router.post(
  '/new',
  passport.authenticate('bearer', { session: false }),
  async (req, res) => {
    // TODO: パラメータのバリデーションチェック これは簡易チェック
    if (!(req.body.value && req.body.observed_at && req.body.item_id)) {
      return res.status(400).json({ message: 'invalid parameters' })
    }

    const item = await Item.findOne(
      { id: req.body.item_id },
      { relations: ['user'] }
    )

    if (!item) {
      return res.status(400).json({ message: 'item is not found' })
    }

    // TODO: passportの引き渡してくるuserの型不一致の修正
    if (item.user.id !== req.user?.id) {
      return res.status(401).send(`Unauthorized`)
    }

    const itemValue = new ItemValue()
    itemValue.value = req.body.value
    itemValue.observedAt = req.body.observed_at
    itemValue.item = item

    try {
      await itemValue.save()
    } catch (err) {
      return res.status(500).json({ message: err })
    }

    return res.status(200).json({ message: 'success' })
  }
)

router.get('/:id', isAuthenticated, async (req, res) => {
  if (req.params.id) {
    const itemId = Number(req.params.id)
    const item = await Item.findOne(
      { id: itemId },
      { relations: ['itemValues'] }
    )
    const itemValues = item?.itemValues
    return res.json(itemValues)
  } else {
    return res.status(400).send
  }
})

export default router
