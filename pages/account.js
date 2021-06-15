
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Text, useToasts } from '@geist-ui/react'
import Layout from '@components/layout'
import Section from '@components/section'

import client from '@lib/shared/client'

export default function AccountPage () {
  const { authToken } = useSelector(state => state.auth)
  const [account, setAccount] = useState('')

  const [, setToast] = useToasts()

  const loadAccount = async () => {
    const { success, data } = await client('/api/secure/account', { auth: authToken })

    if (success) {
      setAccount(data)
    } else {
      setToast({ text: 'Sorry, an error occurred', type: 'warning' })
    }
  }

  useEffect(() => {
    if (authToken) {
      loadAccount()
    }
  }, [authToken])

  return (
    <Layout secure>
      <Section title='Account page' small>
        <Text> Acount address: {account.address} </Text>
        <Text> Account ID: {account.id} </Text>
      </Section>
    </Layout>
  )
}
