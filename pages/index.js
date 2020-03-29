import Link from 'next/link'

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
          <a className="github" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a className="linkedin" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a className="twitter" href="#">
            <i className="fab fa-twitter"></i>
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
    <div className="section big-height background-black">
      <div className="home-carousel-wrap fade-elements">
        <div id="sync1" className="owl-carousel">
          <div className="item background-home-image-1">
            <div className="dark-over-2"></div>
            <div className="home-text-wrap">
              <div className="container">
                <div className="twelve columns">
                  <div className="home-text-freelance">
                    <h1>
                      we build great
                      <br />
                      <span>brands</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item background-home-image-2">
            <div className="dark-over-2"></div>
            <div className="home-text-wrap">
              <div className="container">
                <div className="twelve columns">
                  <div className="home-text-freelance">
                    <h1>
                      focused on
                      <br />
                      <span>strategy</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sync2" className="owl-carousel fade-elements">
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>

    <div className="section padding-top-bottom background-black">
      <div className="container">
        <div className="twelve columns">
          <div id="portfolio-filter" className="portfolio-filter">
            <ul id="filter">
              <li>
                <a href="#" className="current" data-filter="*" title="">
                  all
                </a>
              </li>
              <li
                className="tipped"
                data-title="3 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".branding" title="">
                  web development
                </a>
              </li>
              <li
                className="tipped"
                data-title="3 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".photo" title="">
                  app development
                </a>
              </li>
              <li
                className="tipped"
                data-title="4 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".motion" title="">
                  web design
                </a>
              </li>
              <li
                className="tipped"
                data-title="4 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".motion" title="">
                  app design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects-grid" className="in-container have-space">
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Web Design</em><br><strong>Argentina Cine</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space branding">
            <img src="/portfolio/1.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Photography</em><br><strong>Ryan | Nike Dunes</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space photo">
            <img src="/portfolio/2.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Art Direction</em><br><strong>Reflexion</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space motion">
            <img src="/portfolio/3.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Industrial Design</em><br><strong>iPhone 8</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space branding">
            <img src="/portfolio/4.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Branding</em><br><strong>Val Sander</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space photo">
            <img src="/portfolio/5.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Branding</em><br><strong>Manifesto</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space motion">
            <img src="/portfolio/6.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Branding</em><br><strong>Middletown Cafe</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space motion">
            <img src="/portfolio/7.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Art Direction</em><br><strong>Bar Du Port</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space motion">
            <img src="/portfolio/9.jpg" alt="" />
          </div>
        </a>
        <a
          href="project.html"
          className="tipped"
          data-title="<em>Crafts</em><br><strong>Ceramic Wood & Glass</strong>"
          data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
        >
          <div className="portfolio-box-1 half-width have-space branding">
            <img src="/portfolio/8.jpg" alt="" />
          </div>
        </a>
      </div>
    </div>

    <div className="section padding-top-bottom background-black">
      <div className="container">
        <div
          className="six columns footer"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <p>
            Call me at <a href="#">+33 7 81 81 49 79</a>
            <br />
            or say hello at <a href="#">lacoludo@outlook.com</a>
          </p>
        </div>
        <div
          className="six columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <ul className="footer-social">
            <li>
              <a className="github" href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      className="scroll-to-top tipped"
      data-title="<em>top</em>"
      data-tipper-options='{"direction":"bottom","follow":"true","margin":20}'
    ></div>
  </>
)
