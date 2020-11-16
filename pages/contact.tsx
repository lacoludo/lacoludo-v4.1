import Head from 'next/head'

import FadeOnScroll from '../shared/utils/fade-on-scroll.util'

import Header from '../shared/components/header.component'
import MenuDesktop from '../shared/components/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile.component'
import Footer from '../shared/components/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top.component'
import Form from '../contact/components/form.component'
import Map from '../contact/components/map.component'

const Contact = () => {
  FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Contact</title>
      </Head>
      {/* <Header /> */}
      <MenuDesktop />
      <Form />
      <Map />
      <Footer />
      <ScrollToTop />
      {/* <MenuMobile /> */}
    </>
  )
}

export default Contact
