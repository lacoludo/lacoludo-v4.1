import Link from 'next/link'

export default () => (
  <>
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
                <Link href="/">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
)
