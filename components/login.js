
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, useToasts } from '@geist-ui/react'
import client from '@lib/shared/client'
import storage from '@lib/front/storage'

import { get } from '@personas/client'

import { providerConnect, providerSign } from '@config/provider'

export default function Login () {
  const dispatch = useDispatch()
  const [, setToast] = useToasts()

  const authReady = useSelector((state) => state.authReady)
  const { address } = useSelector((state) => state.auth)

  const [loginBusy, setLoginBusy] = useState(false)

  const handleLogin = async () => {
    if (typeof window !== 'undefined' && !loginBusy) {
      setLoginBusy(true)

      try {
        // handle meta mask login
        const { address } = await providerConnect()
        // console.log({ address, contract })

        // fetch nounce
        const { data } = await client(`/api/open/auth?address=${address}`, { method: 'GET' })
        const { nonce } = data

        // handle nonce signing
        const { signature } = await providerSign({ data: nonce, address })

        // complete sign up
        const result = await client('/api/open/auth', { body: { address, signature }, method: 'POST' })
        const auth = result.data

        if (auth.authToken) {
          const personaResult = await client(get.urls(address).profile)

          if (personaResult.data.title) {
            auth.persona = personaResult.data
          }

          await storage.set('AUTH', auth)
          dispatch({ type: 'AUTH', auth })

          setToast({ text: 'Login successful', type: 'success' })
        } else {
          throw new Error('')
        }

        setLoginBusy(false)
      } catch (err) {
        console.error(err)
        setLoginBusy(false)
        setToast({ text: 'Sorry, an error occurred', type: 'warning' })

        if (err.message === 'Invalid chain') {
          window.alert('Kindly switch your network to a supported network to proceed.')
        } else {
          window.alert('Sorry an error occurred')
        }
      } finally {
        dispatch({ type: 'AUTH', authReady: true })
      }
    }
  }

  return (
    <div>
      <Button
        auto
        onClick={handleLogin}
        disabled={loginBusy || !authReady || !!address}
      >
        Login
      </Button>
    </div>
  )
}
