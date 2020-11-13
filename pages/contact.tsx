import Head from 'next/head'

import { Media, MediaContextProvider } from '../shared/utils/media.util'
import FadeOnScroll from '../shared/utils/fade-on-scroll.util'

import Header from '../shared/components/header/header.component'
import MenuDesktop from '../shared/components/menu-desktop/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile/menu-mobile.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top.component'
import Form from '../contact/components/form/form.component'
import Map from '../contact/components/map/map.component'

const Contact = () => {
  FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Contact</title>
      </Head>
      <MediaContextProvider>
        <Media lessThan='md'>
          <Header />
        </Media>
        <Media greaterThan='sm'>
          <MenuDesktop />
        </Media>
        <Form />
        <Map />
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
}

export default Contact
