import Head from 'next/head'

import AnimatedHeader from '../shared/hooks/animated-header/animated-header.hook'
import FadeOnScroll from '../shared/hooks/fade-on-scroll/fade-on-scroll.hook'
import Menu from '../shared/components/menu/menu.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top'
import Form from '../contact/components/form/form.component'
import Map from '../contact/components/map/map.component'

export default () => {
  // AnimatedHeader()
  // FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Contact</title>
      </Head>
      <Menu />
      <Form />
      <Map />
      <Footer />
      <ScrollToTop />
    </>
  )
}
