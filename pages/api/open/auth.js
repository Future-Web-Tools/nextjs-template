
import jwt from 'jsonwebtoken'

import prisma from '@lib/back/prisma'
import nonceGen from '@lib/back/nonce'
import verify from '@lib/back/verify'

import { JWT_SECRET, JWT_EXPIRATION_HOURS } from '@config/back'

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { address } = req.query

      const user = await prisma.users.findUnique({ where: { address }, select: { nonce: true } })
      const nonce = user?.nonce

      if (nonce) {
        res.status(200).json({ nonce })
      } else {
        const nonce = nonceGen()
        await prisma.users.create({ data: { address, nonce } })

        res.status(200).json({ nonce })
      }
    } else if (req.method === 'POST') {
      const { address, signature } = JSON.parse(req.body)
      const user = await prisma.users.findUnique({ where: { address }, select: { nonce: true } })
      const { nonce } = user || {}

      const verified = await verify({ message: nonce, address, signature })

      if (verified) {
        const updatedUser = await prisma.users.update({ data: { nonce: nonceGen() }, where: { address } })

        const expiresIn = Math.floor((Date.now() + (60 * 60 * JWT_EXPIRATION_HOURS * 1000)) / 1000)
        const authToken = await jwt.sign({ address }, JWT_SECRET, { expiresIn })

        delete updatedUser.nonce
        res.status(200).json({ address, authToken, expiresIn, user: updatedUser })
      } else {
        res.status(500).json({ error: '', message: 'address not found' })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
}
