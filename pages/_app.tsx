import { AppProps } from 'next/app'

import Page from '../shared/components/page/page.component'
import '../shared/styles/main.style.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)

export default MyApp
