
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { useSelector } from 'react-redux'

export default function Themer ({ children }) {
  const theme = useSelector((state) => state.theme)

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />

      {children}
    </GeistProvider>
  )
}
