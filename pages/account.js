
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Text, useToasts } from '@geist-ui/react'
import Layout from '@components/layout'
import Section from '@components/section'

import client from '@lib/shared/client'

export default function AccountPage () {
  const { authToken, persona } = useSelector(state => state.auth)
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
        <Text> Acount address: <b>{account?.address}</b> </Text>
        <Text> Account ID: {account?.id} </Text>
        {persona?.title && <Text> personas username: <b>{persona.title}</b> </Text>}

        {!persona?.title && (
          <Text> No persona! <a href='https://personas.space' target='_blank' rel='noreferrer'> <b>Create one here</b>.</a> </Text>
        )}
      </Section>
    </Layout>
  )
}
