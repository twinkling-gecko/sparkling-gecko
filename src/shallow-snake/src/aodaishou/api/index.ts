import 'reflect-metadata'

import express from 'express'
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

// FIXME: アプリケーションが持つべきものではないのでgithub pagesとかに静的ファイルとしてアップロードすべき
if (process.env.node_env != 'production') {
  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJSDoc(swaggerConfig))
  )
}

app.use(router)

export default app
