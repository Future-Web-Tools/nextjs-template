
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
                  {title && (<h4>{title}</h4>)}

                  {subTitle && <div style={{ margin: '1rem 0' }}>
                    <div>{subTitle}</div>
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
