import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import swaggerConfig from "./swagger.config"
import router from './routes'

const app = express()

// FIXME: アプリケーションが持つべきものではないのでgithub pagesとかに静的ファイルとしてアップロードすべき
if(process.env.node_env != 'production') {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)))
}

app.use(router)

export default app;
