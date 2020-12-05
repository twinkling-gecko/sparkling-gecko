import 'reflect-metadata'

import express from 'express'
import session from 'express-session'
import cors from 'cors'
import passport from 'passport'
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

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || 'secret',
  })
)
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

export default app
