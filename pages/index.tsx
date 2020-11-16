import Head from 'next/head'

import FadeOnScroll from '../shared/utils/fade-on-scroll.util'

import Header from '../shared/components/header.component'
import MenuDesktop from '../shared/components/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile.component'
import Footer from '../shared/components/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top.component'
import Hero from '../projects/components/hero.component'
import Portfolio from '../projects/components/portfolio.component'

const Index = () => {
  FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Projects</title>
      </Head>
      {/* <Header /> */}
      <MenuDesktop />
      <Hero />
      <Portfolio />
      <Footer />
      <ScrollToTop />
      {/* <MenuMobile /> */}
    </>
  )
}

export default Index
