import { Router } from 'express'

const v1Router = Router()

v1Router.get('/', (req, res) => {
  res.json({ message: 'this is v1 router'})
})

export default v1Router
