import { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import kebabCase from 'lodash.kebabcase'
import cn from 'classnames'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import FadeOnScroll from '../../shared/utils/fade-on-scroll.util'
import Header from '../../shared/components/header.component'
import MenuDesktop from '../../shared/components/menu-desktop.component'
import MenuMobile from '../../shared/components/menu-mobile.component'
import Footer from '../../shared/components/footer.component'
import ScrollToTop from '../../shared/components/scroll-to-top.component'
import Data from '../../projects/constants/data.constant'
import Technologies from '../../projects/constants/technologies.constant'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Data.map(posts => ({
    params: {
      slug: kebabCase(posts.name)
    }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    project: Data.filter(data => kebabCase(data.name) === params?.slug)[0]
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

  console.log(project)

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
                {project.technologies.map((technology: any, index: any) => (
                  <li key={index} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    <i
                      className={cn(`devicon-${technology.icon}`, {
                        colored: hover
                      })}
                    ></i>{' '}
                    <strong>{technology.name}</strong>
                  </li>
                ))}
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
      <Footer />
      <ScrollToTop />
      {/* <MenuMobile /> */}
    </>
  )
}

export default Project
