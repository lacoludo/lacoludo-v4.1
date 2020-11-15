import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Media, MediaContextProvider } from '../shared/utils/media.util'
import FadeOnScroll from '../shared/utils/fade-on-scroll.util'

import Header from '../shared/components/header/header.component'
import MenuDesktop from '../shared/components/menu-desktop/menu-desktop.component'
import MenuMobile from '../shared/components/menu-mobile/menu-mobile.component'
import Footer from '../shared/components/footer/footer.component'
import ScrollToTop from '../shared/components/scroll-to-top/scroll-to-top.component'

const Project = () => {
  const style = {
    color: '#00d8ff',
    fontSize: '15px',
    marginBottom: '-3px'
  }
  FadeOnScroll()

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Project: Diviya Lacouture</title>
      </Head>
      <MediaContextProvider>
        <Media lessThan='md'>
          <Header />
        </Media>
        <Media greaterThan='sm'>
          <MenuDesktop />
        </Media>
        <div className='section big-height'>
          <div
            className='parallax fade-elements'
            style={{ backgroundImage: 'url(/portfolio/project/parallax.jpg)' }}
          ></div>
        </div>
        <div className='section padding-top-bottom background-black'>
          <div className='container'>
            <div className='six columns'>
              <div className='title'>
                <h3>Toccata</h3>
                <ul className='list'>
                  <li>
                    Designer: <strong>SVM</strong>
                  </li>
                  <li>
                    Client: <strong>Tocatta</strong>
                  </li>
                  <li>
                    Date: <strong>May 2077</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className='six columns'>
              <div className='subtitle-big'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                neque arcu, suscipit in sollicitudin sed, feugiat a nunc. Cras
                condimentum neque augue, nec auctor lorem semper a. Curabitur
                leo purus, imperdiet eu nisl ac, efficitur vehicula nulla. Duis
                blandit lacus id scelerisque varius. Donec pellentesque neque
                sit amet ligula venenatis euismod. Praesent bibendum pharetra
                tortor, pretium interdum augue vehicula in. Quisque sit amet
                commodo sapien. Aliquam cursus urna eu urna pretium posuere.
              </div>
            </div>
          </div>
        </div>
        <div className='section padding-bottom background-black'>
          <div className='container'>
            <div className='six columns'>
              <div className='img-wrap'>
                <Image src='/portfolio/project/1.gif' alt='' layout='fill' />
              </div>
            </div>
            <div className='six columns'>
              <div className='img-wrap'>
                <Image src='/portfolio/project/2.gif' alt='' layout='fill' />
              </div>
            </div>
          </div>
        </div>
        <div className='section padding-bottom background-black'>
          <div className='container'>
            <div className='eight columns offset-by-two'>
              <div className='subtitle-small'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                neque arcu, suscipit in sollicitudin sed, feugiat a nunc. Cras
                condimentum neque augue, nec auctor lorem semper a. Curabitur
                leo purus, imperdiet eu nisl ac, efficitur vehicula nulla. Duis
                blandit lacus id scelerisque varius. Donec pellentesque neque
                sit amet ligula venenatis euismod. Praesent bibendum pharetra
                tortor, pretium interdum augue vehicula in. Quisque sit amet
                commodo sapien. Aliquam cursus urna eu urna pretium posuere.
              </div>
            </div>
          </div>
        </div>
        <div className='section padding-bottom background-black'>
          <div className='container'>
            <div className='twelve columns'>
              <div className='img-wrap'>
                <Image src='/portfolio/project/1.jpg' alt='' layout='fill' />
              </div>
            </div>
            <div className='clear'></div>
            <div className='six columns'>
              <div className='img-wrap'>
                <Image src='/portfolio/project/3.gif' alt='' layout='fill' />
              </div>
            </div>
            <div className='six columns'>
              <figure className='vimeo'>
                <a href='http://player.vimeo.com/video/212869493'>
                  <Image src='/portfolio/project/3.jpg' alt='' layout='fill' />
                </a>
              </figure>
            </div>
            <div className='clear'></div>
            <div className='twelve columns'>
              <div className='img-wrap'>
                <Image src='/portfolio/project/2.jpg' alt='' layout='fill' />
              </div>
            </div>
          </div>
        </div>
        <div className='section padding-bottom background-black'>
          <div className='container'>
            <div className='twelve columns'>
              <div className='project-nav-wrap'>
                <Link href='/project'>
                  <a>
                    <div className='left-nav'>
                      prev
                      <div className='text-on-hover'>
                        <FiChevronLeft
                          style={{
                            ...style,
                            paddingRight: '10px'
                          }}
                        />
                        Diviya Hoche
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href='/project'>
                  <a>
                    <div className='right-nav'>
                      next
                      <div className='text-on-hover'>
                        Diviya Lacouture
                        <FiChevronRight
                          style={{
                            ...style,
                            paddingLeft: '10px'
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
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

export default Project
