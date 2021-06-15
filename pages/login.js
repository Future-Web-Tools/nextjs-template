
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import Layout from '@components/layout'

export default function LoginPage () {
  const { address } = useSelector((state) => state.auth)

  const router = useRouter()

  useEffect(() => {
    if (address) {
      router.push('/account')
    }
  }, [address])

  return (
    <Layout secure />
  )
}
