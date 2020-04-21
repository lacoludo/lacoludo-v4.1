import Head from 'next/head'

import { Media, MediaContextProvider } from '../shared/utils/media.util'
import FadeOnScroll from '../shared/utils/fade-on-scroll.util'

import Header from '../shared/components/header/header.component'
import MenuDesktop from '../shared/components/menu-desktop/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile/menu-mobile.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top'
import Hero from '../projects/components/hero/hero.component'
import Portfolio from '../projects/components/portfolio/portfolio.component'

export default () => (
  <>
    <Head>
      <title>Ludovic Lacouture | Projects</title>
    </Head>
    <MediaContextProvider>
      <Media greaterThan='sm'>{FadeOnScroll()}</Media>
      <Media lessThan='md'>
        <Header />
      </Media>
      <Media greaterThan='sm'>
        <MenuDesktop />
        <Hero />
      </Media>
      <Portfolio />
      <Media greaterThan='sm'>
        <Footer />
        <ScrollToTop />
      </Media>
      <Media lessThan='md'>
        <MenuMobile />
      </Media>
    </MediaContextProvider>
  </>
)
