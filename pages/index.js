import Head from 'next/head'

import AnimatedHeader from '../shared/hooks/animated-header/animated-header.hook'
import FadeOnScroll from '../shared/hooks/fade-on-scroll/fade-on-scroll.hook'
import Header from '../shared/components/header/header.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top'
import Hero from '../projects/components/hero/hero.component'
import Portfolio from '../projects/components/portfolio/portfolio.component'

export default () => {
  AnimatedHeader()
  FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Projects</title>
      </Head>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
      <ScrollToTop />
    </>
  )
}
