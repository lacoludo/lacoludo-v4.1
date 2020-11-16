import { AppProps } from 'next/app'

import Head from '../shared/components/head.component'
import Page from '../shared/components/page.component'
import '../shared/styles/main.style.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head />
    <Page>
      <Component {...pageProps} />
    </Page>
  </>
)

export default MyApp
