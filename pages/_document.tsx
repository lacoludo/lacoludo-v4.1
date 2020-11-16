import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'

const {
  ANALYTICS_WRITE_KEY = 'yoGnIp9UpgM4h8sp6l7kKXT1gbwPB8hM',
  NODE_ENV = 'development'
} = process.env

class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true
    }
    if (NODE_ENV === 'development') return snippet.max(opts)
    return snippet.min(opts)
  }

  render() {
    return (
      <Html>
        <Head>
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
