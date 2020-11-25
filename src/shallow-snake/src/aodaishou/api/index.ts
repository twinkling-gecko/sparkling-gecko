import 'reflect-metadata'

import express from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { User } from './entity/User'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerConfig from './swagger.config'
import { createConnection, getConnection } from 'typeorm'

import router from './routes'

// db connection
try {
  const connection = getConnection()
  connection.close().then(() => createConnection())
} catch {
  createConnection()
}

const app = express()

app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

passport.use(
  new LocalStrategy(
    { usernameField: 'email', session: false },
    async (email, password, done) => {
      const user = await User.findOne({ email: email })

      // FIXME: パスワードの暗号化処理
      if (user?.encrypted_password === password) {
        return done(null, { id: user.id, email: user.email })
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

// FIXME: アプリケーションが持つべきものではないのでgithub pagesとかに静的ファイルとしてアップロードすべき
if (process.env.node_env != 'production') {
  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJSDoc(swaggerConfig))
  )
}

app.use(router)

app.post('/session', passport.authenticate('local'), (_, res) => {
  res.json({ message: 'success' })
})

export default app
