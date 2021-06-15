
import { Spinner } from '@geist-ui/react'
import Section from '@components/section'

export default function Loader () {
  return (
    <Section medium>
      <div style={{ margin: '3rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spinner size='large' />
      </div>
    </Section>
  )
}
