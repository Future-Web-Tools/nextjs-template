
import { Button, Text } from '@geist-ui/react'
import { Sun as SunIcon, Moon as MoonIcon } from 'react-feather'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import Login from '@components/login'

import storage from '@lib/front/storage'

export default function Header () {
  const dispatch = useDispatch()
  const router = useRouter()

  const theme = useSelector(state => state.theme)
  const { address } = useSelector(state => state.auth)

  const changeTheme = () => dispatch({ type: 'THEME', theme: theme === 'light' ? 'dark' : 'light' })
  const goToAccountPage = () => router.push('/account')

  const logout = async () => {
    await storage.remove('AUTH')
    dispatch({ type: 'LOGOUT', auth: '' })
  }

  return (
    <div className='container'>
      <div style={{ margin: '1rem 0' }}>
        <div className='justified'>

          <Link href='/'>
            <a>
              <Text h2>Future Web</Text>
            </a>
          </Link>

          <div className='dapp-header-right-side'>
            <Button
              auto
              onClick={goToAccountPage}
              style={{ marginRight: '1rem' }}
            >
              Account page
            </Button>

            <div style={{ marginRight: '1rem' }}>

              {address
                ? (<Button onClick={logout} auto>Logout ({`${address.substring(0, 8)}...`}) </Button>)
                : (<Login />)}
            </div>

            <Button
              iconRight={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              auto
              onClick={changeTheme}
            />
          </div>

          <style jsx>{`
            .dapp-header-right-side {
              display: flex;
              align-items: center;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
