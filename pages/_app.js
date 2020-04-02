import Page from '../components/page'

// Skeleton remixed
import '../css/skeleton-remixed/base.css'
import '../css/skeleton-remixed/skeleton.css'
import '../css/skeleton-remixed/layout.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'

export default ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)
