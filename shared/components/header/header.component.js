import Link from 'next/link'

import ActiveLink from '../active-link/active-link.component'

export default () => (
  <>
    <style jsx>{`
      .active {
        color: #00d8ff;
      }
    `}</style>
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
  </>
)
