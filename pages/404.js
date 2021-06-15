
import { Button } from '@geist-ui/react'
import Section from '@components/section'

import { useRouter } from 'next/router'

export default function MissingPage () {
  const router = useRouter()

  const goHome = () => router.push('/')

  return (
    <Section title='404' subTitle='Sorry, nothing here' small>
      <div className='justified'>
        <div />

        <Button onClick={goHome}> Go home</Button>
      </div>
    </Section>
  )
}
