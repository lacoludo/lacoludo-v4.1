import React from 'react'
import App from 'next/app'

import Page from '../shared/components/page/page.component'
import Global from '../shared/styles/global.style'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Page>
        <Global />
        <Component {...pageProps} />
      </Page>
    )
  }
}
