import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/route_handler.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Invalid JSON Handler
app.use((err, req, res, next) => {
  if (err.status === 400) {
    return res
      .status(err.status)
      .send({ status: err.status, message: 'Invalid JSON format' })
  }
  return next(err)
})

// Valid Routes Handler
app.use(router)

// Invalid Routes Handler
app.use((err, req, res, next) => {
  res.status(404).json({
    name: 'Error',
    status: 404,
    message: 'Invalid Request',
    statusCode: 404,
  })
})

export default app
