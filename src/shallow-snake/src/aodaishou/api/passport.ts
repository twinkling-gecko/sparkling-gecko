import passport from 'passport'
import { User } from './entity/User'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

passport.use(
  new LocalStrategy(
    { usernameField: 'email', session: false },
    async (email, password, done) => {
      const user = await User.findOne({ email: email })

      if (comparePlainWithHash(password, user?.encrypted_password || '')) {
        return done(null, { id: user?.id, email: user?.email })
      } else {
        return done(null, false, { message: 'invalid user' })
      }
    }
  )
)

passport.serializeUser(function (user: User, done) {
  done(null, user.id)
})

passport.deserializeUser(async function (id: number, done) {
  const user = await User.findOne(id)
  done(null, user)
})

const comparePlainWithHash = async (plainPassword: string, hash: string) => {
  return await bcrypt.compare(plainPassword, hash, (_, result) => {
    return result
  })
}
