
import { Button, Text, Popover } from '@geist-ui/react'
import { Sun as SunIcon, Moon as MoonIcon } from 'react-feather'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import Login from '@components/login'
import Avatar from '@components/avatar'

import storage from '@lib/front/storage'

export default function Header () {
  const dispatch = useDispatch()
  const router = useRouter()

  const theme = useSelector(state => state.theme)
  const { address, persona } = useSelector(state => state.auth)

  const changeTheme = () => dispatch({ type: 'THEME', theme: theme === 'light' ? 'dark' : 'light' })
  const goToAccountPage = () => router.push('/account')

  const logout = async () => {
    await storage.remove('AUTH')
    dispatch({ type: 'LOGOUT', auth: '' })
  }

  const content = () => {
    const name = persona?.title ? `@${persona.title}` : `${address.substring(0, 14)}...`

    return (
      <>
        <Popover.Item title>
          <span> {name} </span>
        </Popover.Item>
        <Popover.Item>
          <Link href='/account'><a>Account</a></Link>
        </Popover.Item>
        <Popover.Item>
          <a href={`http://personas.space/charm/${address}`} target='_blank' rel='noreferrer'>Charm profile</a>
        </Popover.Item>
        <Popover.Item line />
        <Popover.Item onClick={logout}>
          <a>Logout</a>
        </Popover.Item>
      </>
    )
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

            {address && (
              <Popover content={content}>
                <Avatar address={address} />
              </Popover>
            )}

            {!address && <div> <Login /> </div>}

            <Button
              style={{ marginLeft: '1rem' }}
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
