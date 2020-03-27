import Menu from '../components/menu'

export default () => (
  <>
    <Menu />
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
                  branding
                </a>
              </li>
              <li
                className="tipped"
                data-title="3 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".photo" title="">
                  photo
                </a>
              </li>
              <li
                className="tipped"
                data-title="4 projects"
                data-tipper-options='{"direction":"top","follow":"true"}'
              >
                <a href="#" data-filter=".motion" title="">
                  motion
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
            Call us at <a href="#">+37 237 325 563</a>
            <br />
            or say hello at <a href="#">people@namos.com</a>
          </p>
        </div>
        <div
          className="six columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <ul className="footer-social">
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
            <li>
              <a className="vimeo" href="#">
                Vm
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
