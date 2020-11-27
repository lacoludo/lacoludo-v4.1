import { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import cn from 'classnames'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { readProjects, readProject } from '../../shared/api/slug.api'
import FadeOnScroll from '../../shared/utils/fade-on-scroll.util'
import Header from '../../shared/components/header.component'
import MenuDesktop from '../../shared/components/menu-desktop.component'
import MenuMobile from '../../shared/components/menu-mobile.component'
import Footer from '../../shared/components/footer.component'
import ScrollToTop from '../../shared/components/scroll-to-top.component'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await readProjects(),
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    project: await readProject(params)
  }
})

const Project = ({ project }: any) => {
  FadeOnScroll()

  const [hover, setHover] = useState(false)
  const toggleHover = () => setHover(!hover)

  const style = {
    color: '#00d8ff',
    fontSize: '15px',
    marginBottom: '-3px'
  }

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | {project.name}</title>
      </Head>
      {/* <Header /> */}
      <MenuDesktop />
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
              <h3>{project.name}</h3>
              <ul className='list'>
                {/* {project.technologies.map((technology: any, index: any) => (
                  <li
                    key={index}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                  >
                    <i
                      className={cn(`devicon-${technology.icon}`, {
                        colored: hover
                      })}
                    ></i>{' '}
                    <strong>{technology.name}</strong>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
          <div className='six columns'>
            <div className='subtitle-big'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              arcu, suscipit in sollicitudin sed, feugiat a nunc.
            </div>
          </div>
        </div>
      </div>
      <div className='section padding-bottom background-black'>
        <div className='container'>
          <div className='six columns'>
            <div className='img-wrap'>
              <Image src='/projects/1.gif' alt='' width={1440} height={810} />
            </div>
          </div>
          <div className='six columns'>
            <div className='img-wrap'>
              <Image src='/projects/2.gif' alt='' width={1440} height={810} />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='twelve columns'>
            <div className='video-wrapper'>
              <figure className='vimeo'>
                <iframe
                  src='https://player.vimeo.com/video/484266803?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=00d8ff'
                  width='500'
                  height='281'
                  frameBorder='0'
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className='section padding-bottom background-black'>
        <div className='container'>
          <div className='eight columns offset-by-two'>
            <div className='subtitle-small'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              arcu, suscipit in sollicitudin sed, feugiat a nunc. Cras
              condimentum neque augue, nec auctor lorem semper a. Curabitur leo
              purus, imperdiet eu nisl ac, efficitur vehicula nulla. Duis
              blandit lacus id scelerisque varius. Donec pellentesque neque sit
              amet ligula venenatis euismod. Praesent bibendum pharetra tortor,
              pretium interdum augue vehicula in. Quisque sit amet commodo
              sapien. Aliquam cursus urna eu urna pretium posuere.
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
      <Footer />
      <ScrollToTop />
      {/* <MenuMobile /> */}
    </>
  )
}

export default Project
