
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import Login from '@components/login'
import Avatar from '@components/avatar'

import storage from '@lib/front/storage'

export default function Header () {
  const dispatch = useDispatch()
  const router = useRouter()

  const { address } = useSelector(state => state.auth)

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
            <a className='header-brand-name'> Future Web </a>
          </Link>

          <div className='dapp-header-right-side'>
            {address && (
              <div title='Personas profile' onClick={goToAccountPage}>
                <Avatar address={address} />
              </div>
            )}

            {address && (
              <div className='logout-icon-div' title='Log out'>
                <button className='logout-icon-div' onClick={logout}> Logout </button>
              </div>
            )}

            {!address && <div> <Login /> </div>}

          </div>

          <style jsx>{`
            .header-brand-name {
              text-decoration: none;
              font-weight: 600;
              font-size: 140%;
              color: #33C3F0;
              border: 6px solid #33C3F0;
              padding: 0.5rem 1rem;
            }
            .dapp-header-right-side {
              display: flex;
              align-items: center;
            }
            .logout-icon-div {
              margin: 1rem;
              cursor: pointer;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
