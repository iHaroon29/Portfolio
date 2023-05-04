import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const generateToken = (data, expiry) => {
  return jwt.sign({ data }, process.env.secret, { expiresIn: expiry })
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.secret)
}

const decodeToken = (token) => {
  return jwt.decode(token)
}

export { generateToken, verifyToken, decodeToken }
