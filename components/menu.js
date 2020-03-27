export default () => (
  <>
    <div className="cd-nav-container" id="cd-nav">
      <header>
        <a href="#0" className="cd-close-nav">
          Close
        </a>
      </header>

      <div className="cd-nav">
        <nav className="menu menu--mohe">
          <a className="menu__item" href="index.html">
            <span className="menu__item-name curent-nav">Work</span>
            <span className="menu__item-label">Explore the portfolio</span>
          </a>
          <a className="menu__item" href="about.html">
            <span className="menu__item-name">Studio</span>
            <span className="menu__item-label">Read our mission statement</span>
          </a>
          <a className="menu__item" href="blog.html">
            <span className="menu__item-name">Journal</span>
            <span className="menu__item-label">
              Discover fascinating stories
            </span>
          </a>
          <a className="menu__item" href="contact.html">
            <span className="menu__item-name">Hello</span>
            <span className="menu__item-label">Get in touch and find us</span>
          </a>
        </nav>
      </div>

      <ul className="nav-social">
        <li>
          <a className="twitter" href="#">
            Tw
          </a>
        </li>
        <li>
          <a className="facebook" href="#">
            Fb
          </a>
        </li>
        <li>
          <a className="google" href="#">
            G+
          </a>
        </li>
      </ul>
    </div>

    <div className="cd-overlay"></div>

    <nav id="menu-wrap" className="menu-back cbp-af-header">
      <div className="container">
        <div className="twelve columns">
          <div className="menu">
            <a href="index.html">
              <div className="logo"></div>
            </a>
            <a href="#cd-nav" className="cd-nav-trigger">
              Menu<span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
)
