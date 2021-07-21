
import Section from '@components/section'

export default function Loader () {
  return (
    <Section medium>
      <div style={{ margin: '3rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='/images/loading.gif' />
      </div>
    </Section>
  )
}
