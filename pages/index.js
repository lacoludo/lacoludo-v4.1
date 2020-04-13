import Head from 'next/head'

import Header from '../shared/components/header/header.component'
import Footer from '../shared/components/footer/footer.component'
import Hero from '../projects/components/hero/hero.component'
import Portfolio from '../projects/components/portfolio/portfolio.component'

export default () => {
  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Projects</title>
      </Head>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </>
  )
}
