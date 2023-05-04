import http from 'http'
import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()
const server = http.createServer(app)
const port = process.env.PORT ? process.env.PORT : 8000

server.on('listening', () => {
  console.log(`Listening on port: ${port}`)
})

server.on('error', (e) => {
  console.log(e.message)
})

server.listen(port)
