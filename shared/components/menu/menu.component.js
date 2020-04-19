import Link from 'next/link'
import styled from 'styled-components'
import { FiAtSign, FiGrid, FiUser } from 'react-icons/fi'

import ActiveLink from '../active-link/active-link.component'
import useWindowSize from '../../hooks/use-window-size/use-window-size.hook'

const MenuMobile = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #000000;
  display: flex;
  overflow-x: auto;
  z-index: 1;
`

export default () => {
  const size = useWindowSize()

  return (
    <>
      <style jsx>{`
        .active {
          color: #00d8ff !important;
        }

        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          min-width: 50px;
          overflow: hidden;
          white-space: nowrap;
          font-size: 13px;
          color: #ffffff;
          text-decoration: none;
          transition: background-color 0.1s ease-in-out;
        }
      `}</style>
      {size.width > 1200 ? (
        <nav className="menu-back cbp-af-header" id="menu-wrap">
          <div className="container">
            <div className="twelve columns">
              <div className="menu">
                <Link href="/">
                  <a>
                    <div className="logo"></div>
                  </a>
                </Link>
                <ul>
                  <li>
                    <ActiveLink activeClassName="active" href="/">
                      <a>Projects</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" href="/about">
                      <a>About</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" href="/contact">
                      <a>Contact</a>
                    </ActiveLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <MenuMobile>
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">
              <FiGrid />
              Projects
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/about">
            <a className="nav-link">
              <FiUser />
              About
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/contact">
            <a className="nav-link">
              <FiAtSign />
              Contact
            </a>
          </ActiveLink>
        </MenuMobile>
      )}
    </>
  )
}
