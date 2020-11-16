import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'

import { mediaStyles } from '../shared/utils/media.util'

const { NODE_ENV = 'development' } = process.env

class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: 'yoGnIp9UpgM4h8sp6l7kKXT1gbwPB8hM',
      page: true
    }
    if (NODE_ENV === 'development') return snippet.max(opts)
    return snippet.min(opts)
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
