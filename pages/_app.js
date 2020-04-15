import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import Page from '../shared/components/page/page.component'
import Theme from '../shared/styles/theme.style'
import Global from '../shared/styles/global.style'

// import 'react-tippy/dist/tippy.css'

export default class extends App {
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
