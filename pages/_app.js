import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import Page from '../shared/components/page/page.component'
import Theme from '../shared/styles/theme.style'
import Global from '../shared/styles/global.style'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Page>
        <ThemeProvider theme={Theme}>
          <Global />
          <Component {...pageProps} />
        </ThemeProvider>
      </Page>
    )
  }
}

export default MyApp
