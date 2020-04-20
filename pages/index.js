import Head from 'next/head'
import { useMedia } from 'react-use'

import Theme from '../shared/styles/theme.style'
// import AnimatedHeader from '../shared/hooks/animated-header/animated-header.hook'
// import FadeOnScroll from '../shared/hooks/fade-on-scroll/fade-on-scroll.hook'
import Header from '../shared/components/header/header.component'
import MenuDesktop from '../shared/components/menu-desktop/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile/menu-mobile.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top'
import Hero from '../projects/components/hero/hero.component'
import Portfolio from '../projects/components/portfolio/portfolio.component'

export default () => {
  // AnimatedHeader()
  // FadeOnScroll()

  const isMD = useMedia(`(min-width: ${Theme.breakpoints[1]})`)

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Projects</title>
      </Head>
      {!isMD ? <Header /> : <></>}
      {isMD ? <MenuDesktop /> : <></>}
      {isMD ? <Hero /> : <></>}
      <Portfolio />
      {!isMD ? <MenuMobile /> : <></>}
      {isMD ? <Footer /> : <></>}
      {isMD ? <ScrollToTop /> : <></>}
    </>
  )
}
