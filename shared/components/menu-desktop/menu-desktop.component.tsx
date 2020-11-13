import { useEffect } from 'react'
import Link from 'next/link'

import ActiveLink from '../active-link/active-link.component'

const MenuDesktopComponent = () => {
  useEffect(() => {
    const docElem = document.documentElement,
      header = document.querySelector('.cbp-af-header'),
      changeHeaderOn = 300
    let didScroll = false

    const init = () => {
      scrollPage()
      window.addEventListener(
        'scroll',
        () => {
          if (!didScroll) {
            didScroll = true
            setTimeout(scrollPage, 250)
          }
        },
        false
      )
    }

    const scrollPage = () => {
      const sy = scrollY()
      sy >= changeHeaderOn
        ? header?.classList.add('cbp-af-header-shrink')
        : header?.classList.remove('cbp-af-header-shrink')
      didScroll = false
    }

    const scrollY = () => window.pageYOffset || docElem.scrollTop

    init()
  }, [])

  return (
    <>
      <nav className='menu-back cbp-af-header' id='menu-wrap'>
        <div className='container'>
          <div className='twelve columns'>
            <div className='menu'>
              <Link href='/'>
                <a>
                  <div className='logo'></div>
                </a>
              </Link>
              <ul>
                <li>
                  <ActiveLink activeClassName='active' href='/'>
                    <a>Projects</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activeClassName='active' href='/about'>
                    <a>About</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activeClassName='active' href='/contact'>
                    <a>Contact</a>
                  </ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MenuDesktopComponent
