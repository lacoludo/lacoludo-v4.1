import styled from 'styled-components'
import { FiAtSign, FiGrid, FiUser } from 'react-icons/fi'

import ActiveLink from '../active-link/active-link.component'

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

const MenuMobileComponent = () => {
  return (
    <>
      <style jsx>{`
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
      <MenuMobile>
        <ActiveLink activeClassName='active' href='/'>
          <a className='nav-link'>
            <FiGrid />
            Projects
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active' href='/about'>
          <a className='nav-link'>
            <FiUser />
            About
          </a>
        </ActiveLink>
        <ActiveLink activeClassName='active' href='/contact'>
          <a className='nav-link'>
            <FiAtSign />
            Contact
          </a>
        </ActiveLink>
      </MenuMobile>
    </>
  )
}

export default MenuMobileComponent
