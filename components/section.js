
import { Text } from '@geist-ui/react'

export default function Section (props) {
  const { title, subTitle, small, medium, free, children } = props

  return (
    <div className={free ? '' : 'container'}>
      <div className='section'>
        <div className={small ? 'small-section' : medium ? 'medium-section' : 'big-section'}>
          <div>
            {(title || subTitle) &&
              <div className='justified' style={{ marginBottom: '1rem' }}>

                <div>
                  {title && (<Text h2>{title}</Text>)}

                  {subTitle && <div style={{ margin: '1rem 0' }}>
                    <Text small>{subTitle}</Text>
                  </div>}
                </div>

                <div className='' style={{ marginBottom: '1.8rem' }} />
              </div>}

            <div> {children} </div>
          </div>
        </div>
      </div>
    </div>
  )
}
