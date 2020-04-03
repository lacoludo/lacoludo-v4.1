import Page from '../components/page'

import Base from '../styles/base'
import Skeleton from '../styles/skeleton'
import Layout from '../styles/layout'
import Color from '../styles/color'

export default ({ Component, pageProps }) => (
  <>
    <Base />
    <Skeleton />
    <Layout />
    <Color />
    <Page>
      <Component {...pageProps} />
    </Page>
  </>
)
