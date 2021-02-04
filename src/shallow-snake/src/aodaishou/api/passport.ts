import passport from 'passport'
import bcrypt from 'bcrypt'
import { Strategy as LocalStrategy } from 'passport-local'
import { User } from './entity/User'

passport.use(
  new LocalStrategy(
    { usernameField: 'email', session: false },
    async (email, password, done) => {
      let user: User | undefined
      try {
        user = await User.findOne({ email: email })
      } catch (err) {
        return done(err, false, {
          message: 'failed to fetch data from the database',
        })
      }

      const isCompared = await comparePlainWithHash(
        password,
        user?.encrypted_password || ''
      )

      if (user && isCompared) {
        return done(null, { id: user?.id, email: user?.email })
      } else {
        // emailに合致するuserが存在しないかpasswordが合致しない場合
        return done(null, false, { message: 'invalid email or password' })
      }
    }
  )
)

passport.serializeUser(function (user: User, done) {
  done(null, user.id)
})

passport.deserializeUser(async function (id: number, done) {
  try {
    const user: User | undefined = await User.findOne({ id: id })
    done(null, user)
  } catch (err) {
    done(err, false)
  }
})

const comparePlainWithHash = async (plainPassword: string, hash: string) => {
  return await bcrypt.compare(plainPassword, hash)
}
