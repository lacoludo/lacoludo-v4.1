import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import Page from '../components/page'
import Fonts from '../styles/fonts'
import Base from '../styles/base'
import Skeleton from '../styles/skeleton'
import Layout from '../styles/layout'
import Color from '../styles/color'

const theme = {
  colors: {
    primary: '#00d8ff'
  }
}

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <ThemeProvider theme={theme}>
          <Fonts />
          <Base />
          <Skeleton />
          <Layout />
          <Color />
          <Component {...pageProps} />
        </ThemeProvider>
      </Page>
    )
  }
}
