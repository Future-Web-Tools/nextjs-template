
import { Provider } from 'react-redux'
import { useStore } from '@store/index'

import Themer from '@components/themer'
import HeaderParial from '@components/header'
import FooterPartial from '@components/footer'

import '@styles/globals.scss'

export default function App ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Themer>
        <HeaderParial />
        <Component {...pageProps} />
        <FooterPartial />
      </Themer>
    </Provider>
  )
}
