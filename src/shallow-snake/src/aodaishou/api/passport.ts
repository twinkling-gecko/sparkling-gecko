import passport from 'passport'
import { User } from './entity/User'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

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

      if (
        user &&
        comparePlainWithHash(password, user?.encrypted_password || '')
      ) {
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
    console.log(user)
    done(null, user)
  } catch (err) {
    done(err, false)
  }
})

const comparePlainWithHash = async (plainPassword: string, hash: string) => {
  return await bcrypt.compare(plainPassword, hash, (_, result) => {
    return result
  })
}
