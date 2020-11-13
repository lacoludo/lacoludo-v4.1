import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Page from '../shared/components/page/page.component'
import Theme from '../shared/styles/theme.style'
import Global from '../shared/styles/global.style'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Page>
    <ThemeProvider theme={Theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  </Page>
)

export default MyApp
