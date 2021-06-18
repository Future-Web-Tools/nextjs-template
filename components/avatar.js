
// learn more about personas: https://docs.personas.space/

export default function Avatar ({ address }) {
  const placeholderAvatar = 'https://img.prs.onl/avatar/placeholders/small.png'
  const imgSrc = `https://img.prs.onl/avatar/small/${address}.png`

  const onError = e => {
    e.target.onerror = null
    e.target.src = placeholderAvatar
  }

  return (
    <>
      <img src={imgSrc} onError={onError} className='user-avatar-image' />

      <style jsx>{`
        .user-avatar-image {
          width: 50px;
          cursor: pointer;
          border-radius: 50%;
          border: solid 2px #00ffcc;
        }
      `}</style>
    </>
  )
}
