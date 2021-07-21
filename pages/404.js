
import Section from '@components/section'

import { useRouter } from 'next/router'

export default function MissingPage () {
  const router = useRouter()

  const goHome = () => router.push('/')

  return (
    <Section title='404' subTitle='Sorry, nothing here' small>
      <div className='justified'>
        <div />

        <button onClick={goHome}> Go home</button>
      </div>
    </Section>
  )
}
