import Head from 'next/head'

import Header from '../shared/components/header/header.component'
import Footer from '../shared/components/footer/footer.component'
import Form from '../contact/components/form/form.component'
import Map from '../contact/components/map/map.component'

export default () => (
  <>
    <Head>
      <title>Ludovic Lacouture | Contact</title>
    </Head>
    <Header />
    <Form />
    <Map />
    <Footer />
  </>
)
