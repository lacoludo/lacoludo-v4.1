import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../config/seo.config.json'

const Head = () => (
  <>
    <DefaultSeo {...SEO} />
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
    </NextHead>
  </>
)

export default Head
