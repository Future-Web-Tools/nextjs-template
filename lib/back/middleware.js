import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '@config/back'

const withAuth = handler => {
  return async (req, res) => {
    const token = req.headers.authorization

    if (token === null) return res.status(401).end()

    jwt.verify(token, JWT_SECRET, (err, auth) => {
      if (err) {
        console.error(err)
        return res.status(403).end()
      } else {
        req.auth = auth
        return handler(req, res)
      }
    })
  }
}

export default withAuth
