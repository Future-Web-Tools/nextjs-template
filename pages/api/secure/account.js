
import prisma from '@lib/back/prisma'
import middleware from '@lib/back/middleware'

const account = async (req, res) => {
  try {
    const { auth } = req

    if (req.method === 'GET') {
      const result = await prisma.users.findUnique({ where: { address: auth.address } })

      return res.status(200).json(result)
    } else {
      return res.status(405).send('')
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send('')
  }
}

export default middleware(account)
