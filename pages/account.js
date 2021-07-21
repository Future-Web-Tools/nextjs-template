
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Layout from '@components/layout'
import Section from '@components/section'

import client from '@lib/shared/client'

export default function AccountPage () {
  const { authToken, persona } = useSelector(state => state.auth)
  const [account, setAccount] = useState('')

  const loadAccount = async () => {
    const { success, data } = await client('/api/secure/account', { auth: authToken })

    if (success) {
      setAccount(data)
    } else {
      window.alert('Sorry, an error occurred')
    }
  }

  useEffect(() => {
    if (authToken) {
      loadAccount()
    }
  }, [authToken])

  /*
        <div>
          <span> {name} </span>
        </div>
        <div>
          <Link href='/account'><a>Account</a></Link>
        </div>
        <div>
          <a href={`http://personas.space/address/${address}`} target='_blank' rel='noreferrer'>Charm profile</a>
        </div>
        <div line />
        <div onClick={logout}>
          <a>Logout</a>
        </div>
      </>
*/

  return (
    <Layout secure>
      <Section title='Account page' small>

        <div className='account-info justified'>
          <div> Address: </div>
          <div> <b>{account?.address}</b> </div>
        </div>

        <div className='account-info justified'>
          <div> User ID: </div>
          <div> <b>{account?.id}</b> </div>
        </div>

        {persona?.namespace && (
          <div className='account-info justified'>
            <div> Personas name: </div>
            <div> <b>{persona.title}</b> </div>
          </div>
        )}

        {persona?.namespace && (
          <div className='account-info justified'>
            <div> Personas namespace: </div>
            <div> <b>{persona.namespace}</b> </div>
          </div>
        )}

        {persona?.namespace && (
          <a
            className='button'
            style={{ width: '100%' }}
            href={`http://prs.name/${persona.namespace}`}
            target='_blank' rel='noreferrer'
          >
            <b>View my Persona</b>
          </a>
        )}

        {!persona?.namespace && (
          <a className='button button-primary' style={{ width: '100%' }} href='https://personas.space' target='_blank' rel='noreferrer'>
            No persona! <b>Create one here</b>
          </a>
        )}

        <style jsx>{`
          .account-info {
            font-size: 120%;
            margin-bottom: 2rem;
          }
        `}</style>
      </Section>
    </Layout>
  )
}
