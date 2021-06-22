
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Head from 'next/head'
import { Text } from '@geist-ui/react'

import Login from '@components/login'
import Loader from '@components/loader'
import Section from '@components/section'

import { get, remove } from '@lib/front/storage'
import { providerConnect } from '@config/provider'

import { LOGIN_CHECK_FREQUENCY } from '@config/front'

const expiredDate = (expiresIn) => new Date(expiresIn * 1000) < new Date()

const defaultMeta = {
  title: 'Site template - Future Web nextjs',
  description: 'Future Web next js.'
}

const Layout = ({ children, secure, meta = defaultMeta }) => {
  const dispatch = useDispatch()
  const { address, expiresIn } = useSelector((state) => state.auth)
  const authReady = useSelector((state) => state.authReady)

  const readyAuth = async () => {
    try {
      const AUTH = await get('AUTH')

      if (AUTH) {
        const expired = expiredDate(expiresIn)

        if (!expired && !address) {
          dispatch({ type: 'AUTH', auth: AUTH })
        } else if (expired) {
          dispatch({ type: 'AUTH', auth: {} })
          await remove('AUTH')
        }
      }
    } catch (err) {
      remove('AUTH')
      console.error(err)
    } finally {
      dispatch({ type: 'AUTH', authReady: true })
    }
  }

  const validateLogin = async () => {
    const expired = expiredDate(expiresIn)

    if (expired) {
      dispatch({ type: 'AUTH', auth: {} })
      await remove('AUTH')
    }
  }

  useEffect(() => {
    setInterval(validateLogin, LOGIN_CHECK_FREQUENCY)
  }, [expiresIn])

  useEffect(() => {
    if (address && !window.globalProvider) {
      providerConnect() // .then(data => {})
    }
  }, [address])

  useEffect(() => {
    readyAuth()
  }, [])

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
      </Head>

      {!authReady && <Loader />}

      {authReady && <div>
        {(secure && !address)
          ? (
            <Section title='Sorry, login required' small>
              <div>
                <Text> Please login to continue </Text>

                <div className='justified'>
                  <div />

                  <Login />
                </div>
              </div>
            </Section>
            )
          : (<> {children} </>)}
      </div>}
    </div>
  )
}

export default Layout
