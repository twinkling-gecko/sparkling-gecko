import { getRepository } from 'typeorm'
import { validate } from 'class-validator'
import { Item, User } from '../entity'

export namespace ItemHandler {
  // NOTE: save失敗時にDB関連の例外を発生させる
  export async function updateItem(
    id: number,
    user: User,
    name: string,
    imageUrl: string
  ): Promise<Item | undefined> {
    const item: Item | undefined = await getRepository(Item)
      .findOne({
        id,
        user,
      })
      .catch((err) => {
        throw err
      })

    if (item) {
      item.name = name
      item.imageUrl = imageUrl
      const errors = await validate(item)
      if (errors.length > 0) {
        throw errors
      }

      return item.save()
    }
  }
}
