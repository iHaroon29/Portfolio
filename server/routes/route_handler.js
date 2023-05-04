import { Router } from 'express'
import { createHandler } from 'graphql-http/lib/use/express'
import { root, schema } from '../controller/graphql_controller.js'

const router = Router()

router.route('/ping').get((req, res) => {
  res.status(200).send('Hello')
})
router.all('/blog', createHandler({ schema, rootValue: root }))

export default router
