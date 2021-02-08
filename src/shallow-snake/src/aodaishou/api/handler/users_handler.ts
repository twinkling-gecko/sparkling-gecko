import bcrypt from 'bcrypt'
import { validate } from 'class-validator'
import { User } from '../entity/User'

export namespace UsersHandler {
  // NOTE: save失敗時にDB関連の例外を発生させる
  export async function createUser(
    email: string,
    password: string
  ): Promise<User> {
    const user = new User()

    user.email = email
    user.encrypted_password = encryptPassword(password)
    user.token = generateToken()

    const errors = await validate(user)
    if (errors.length > 0) {
      throw errors
    }

    return user.save()
  }
}

function encryptPassword(password: string): string {
  return bcrypt.hashSync(password, 10)
}

function generateToken(): string {
  // TODO: トークン生成器
  return 'USER_TOKEN'
}
