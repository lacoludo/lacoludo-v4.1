import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <>
    <Head>
      <title>Ludovic Lacouture | About</title>
    </Head>
    <Header />
    <div className="section padding-top-from-nav padding-bottom background-black">
      <div className="container">
        <div className="six columns fade-elements">
          <div className="title">
            <h3>ludovic lacouture</h3>
            <ul className="list">
              <li>
                <strong>web development</strong>
              </li>
              <li>
                <strong>app development</strong>
              </li>
              <li>
                <strong>web design</strong>
              </li>
              <li>
                <strong>app design</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="six columns fade-elements">
          <div className="subtitle-big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            arcu, suscipit in sollicitudin sed, feugiat a nunc. Cras condimentum
            neque augue, nec auctor lorem semper a. Curabitur leo purus,
            imperdiet eu nisl ac, efficitur vehicula nulla. Duis blandit lacus
            id scelerisque varius. Donec pellentesque neque sit amet ligula
            venenatis euismod. Praesent bibendum pharetra tortor, pretium
            interdum augue vehicula in. Quisque sit amet commodo sapien. Aliquam
            cursus urna eu urna pretium posuere.
          </div>
        </div>
      </div>
    </div>
    <div className="section big-height">
      <div
        className="parallax"
        style={{ backgroundImage: 'url(/parallax-about.jpg)' }}
      ></div>
    </div>
    {/* <div className="section padding-top-bottom background-black">
      <div className="container">
        <div
          className="three columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <div className="title">
            <h6>
              <span>-</span> creative team
            </h6>
          </div>
        </div>
        <div
          className="nine columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <div className="content-team">
            <div className="slideshow-team">
              <div
                id="slide-1"
                className="slide-team"
                style={{ backgroundImage: 'url(/2d.jpg)' }}
              ></div>
              <div
                id="slide-2"
                className="slide-team"
                style={{ backgroundImage: 'url(/3d.jpg)' }}
              ></div>
              <div
                id="slide-4"
                className="slide-team"
                style={{ backgroundImage: 'url(/1d.jpg)' }}
              ></div>
              <div
                className="pieces"
                style={{ backgroundImage: 'url(/2d.jpg)' }}
              ></div>
            </div>
            <nav className="menu-team">
              <a
                className="menu__item-team menu__item--current-team"
                href="#slide-1"
                data-image="/2d.jpg"
              >
                Jason Salvatore
                <br />
                <span>director</span>
              </a>
              <a
                className="menu__item-team"
                href="#slide-2"
                data-image="/3d.jpg"
              >
                Terry Mitchell
                <br />
                <span>web design</span>
              </a>
              <a
                className="menu__item-team"
                href="#slide-3"
                data-image="/1d.jpg"
              >
                Michael Brighton
                <br />
                <span>developer</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div> */}
    <div className="section padding-bottom background-black">
      <div className="container">
        <div
          className="three columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <div className="title">
            <h6>
              <span>-</span> what i do
            </h6>
          </div>
        </div>
        <div className="three columns">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="2" transform="translate(0.5, 0.5)">
                  <line
                    data-cap="butt"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    x1="15"
                    y1="12"
                    x2="20"
                    y2="17"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <rect
                    x="9.5"
                    y="7"
                    transform="matrix(0.7071 0.7071 -0.7071 0.7071 17.2425 -3.6275)"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    width="7.1"
                    height="24"
                    strokeLinejoin="miter"
                  ></rect>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="13"
                    y1="7"
                    x2="11"
                    y2="5"
                    strokeLinejoin="miter"
                  ></line>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="19"
                    y1="4.5"
                    x2="19"
                    y2="1.7"
                    strokeLinejoin="miter"
                  ></line>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="25"
                    y1="7"
                    x2="27"
                    y2="5"
                    strokeLinejoin="miter"
                  ></line>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="27.5"
                    y1="13"
                    x2="30.3"
                    y2="13"
                    strokeLinejoin="miter"
                  ></line>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="25"
                    y1="19"
                    x2="27"
                    y2="21"
                    strokeLinejoin="miter"
                  ></line>
                </g>
              </svg>
            </div>
            <h6>branding</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
        <div className="three columns">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="2" transform="translate(0.5, 0.5)">
                  <polyline
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="8,10 2,16 8,22 
	"
                    strokeLinejoin="miter"
                  ></polyline>
                  <polyline
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="24,10 30,16 
	24,22 "
                    strokeLinejoin="miter"
                  ></polyline>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="27"
                    x2="20"
                    y2="5"
                    strokeLinejoin="miter"
                  ></line>
                </g>
              </svg>
            </div>
            <h6>development</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
        <div className="three columns">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-3"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="1" transform="translate(0.5, 0.5)">
                  <polyline
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="4,24 1,24 1,4 
	17,4 "
                    strokeLinejoin="miter"
                  ></polyline>
                  <polyline
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="28,4 31,4 31,24 
	11,24 "
                    strokeLinejoin="miter"
                  ></polyline>
                  <line
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="11"
                    y1="30"
                    x2="21"
                    y2="30"
                    strokeLinejoin="miter"
                  ></line>
                  <path
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M27,16h-9
	c-0.552,0-1-0.448-1-1V2c0-0.552,0.448-1,1-1h9c0.552,0,1,0.448,1,1v13C28,15.552,27.552,16,27,16z"
                    strokeLinejoin="miter"
                  ></path>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="22"
                    y1="13"
                    x2="23"
                    y2="13"
                    strokeLinejoin="miter"
                  ></line>
                  <path
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M10,27H5
	c-0.552,0-1-0.448-1-1V16c0-0.552,0.448-1,1-1h5c0.552,0,1,0.448,1,1v10C11,26.552,10.552,27,10,27z"
                    strokeLinejoin="miter"
                  ></path>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="7"
                    y1="24"
                    x2="8"
                    y2="24"
                    strokeLinejoin="miter"
                  ></line>
                  <polyline
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="18,30 18,28 
	14,28 14,30 "
                    strokeLinejoin="miter"
                  ></polyline>
                </g>
              </svg>
            </div>
            <h6>web design</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
        <div className="clear"></div>
        <div className="three columns offset-by-three">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="1" transform="translate(0.5, 0.5)">
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="3"
                    y1="6"
                    x2="8"
                    y2="6"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="3"
                    y1="11"
                    x2="6"
                    y2="11"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="3"
                    y1="16"
                    x2="8"
                    y2="16"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="3"
                    y1="21"
                    x2="6"
                    y2="21"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="3"
                    y1="26"
                    x2="8"
                    y2="26"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="24"
                    y1="6"
                    x2="24"
                    y2="24"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="19"
                    y1="6"
                    x2="29"
                    y2="6"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="19"
                    y1="24"
                    x2="29"
                    y2="24"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <rect
                    x="3"
                    y="1"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    width="11"
                    height="30"
                    strokeLinejoin="miter"
                  ></rect>
                  <polygon
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    points="29,24 24,30 19,24 
	19,1 29,1 "
                    strokeLinejoin="miter"
                  ></polygon>
                </g>
              </svg>
            </div>
            <h6>graphic design</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
        <div className="three columns">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="1" transform="translate(0.5, 0.5)">
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="25"
                    y1="26"
                    x2="7"
                    y2="26"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="17.8"
                    y1="9"
                    x2="26.2"
                    y2="23"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <line
                    data-cap="butt"
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    x1="5.8"
                    y1="23"
                    x2="14.2"
                    y2="9"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></line>
                  <rect
                    x="25"
                    y="23"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    width="6"
                    height="6"
                    strokeLinejoin="miter"
                  ></rect>
                  <rect
                    x="13"
                    y="3"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    width="6"
                    height="6"
                    strokeLinejoin="miter"
                  ></rect>
                  <rect
                    x="1"
                    y="23"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    width="6"
                    height="6"
                    strokeLinejoin="miter"
                  ></rect>
                </g>
              </svg>
            </div>
            <h6>social media</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
        <div className="three columns">
          <div className="about-wrap">
            <div className="about-icon">
              <svg
                version="1.1"
                id="svg-icon-6"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32px"
                height="32px"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                style={{ enableBackground: 'new 0 0 32 32' }}
                xmlSpace="preserve"
              >
                <g strokeWidth="1" transform="translate(0.5, 0.5)">
                  <polyline
                    data-cap="butt"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    points="20,19 9,19 9,5 24,5 24,13 
	"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></polyline>
                  <line
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="5"
                    y1="11"
                    x2="5"
                    y2="13"
                    strokeLinejoin="miter"
                  ></line>
                  <path
                    data-cap="butt"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                    d="M20,23H2c-0.552,0-1-0.448-1-1V2
	c0-0.552,0.448-1,1-1h25c0.552,0,1,0.448,1,1v11"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></path>
                  <line
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    x1="25"
                    y1="27"
                    x2="26"
                    y2="27"
                    strokeLinejoin="miter"
                  ></line>
                  <path
                    data-color="color-2"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    d="M29,31h-7
	c-1.105,0-2-0.895-2-2V15c0-1.105,0.895-2,2-2h7c1.105,0,2,0.895,2,2v14C31,30.105,30.105,31,29,31z"
                    strokeLinejoin="miter"
                  ></path>
                </g>
              </svg>
            </div>
            <h6>app & iOS</h6>
            <p>Vivamus dapibus rutrum mi ut aliquam dictumst.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="section padding-top-bottom-sep">
      <div
        className="parallax-1"
        style={{ backgroundImage: 'url(/parallax-about-1.jpg)' }}
      ></div>
      <div className="dark-over"></div>
      <div id="owl-sep-1" className="owl-carousel owl-theme z-index-bigger">
        <div className="item">
          <div className="container">
            <div className="twelve columns">
              <div className="quote-sep">
                <h4>
                  "Design must reflect the practical and aesthetic in business
                  but above all... good design must primarily serve people."
                </h4>
                <h6>Jason Salvatore</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <div className="twelve columns">
              <div className="quote-sep">
                <h4>
                  "Design is a funny word. Some people think design means how it
                  looks. But of course, if you dig deeper, it's really how it
                  works."
                </h4>
                <h6>Terry Mitchell</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <div className="twelve columns">
              <div className="quote-sep">
                <h4>
                  "Space and light and order. Those are the things that men need
                  just as much as they need bread or a place to sleep."
                </h4>
                <h6>Michael Brighton</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section padding-top-bottom background-black">
      <div className="container">
        <div className="twelve columns">
          <div id="owl-logos" className="owl-carousel owl-theme">
            <div className="item">
              <img src="/logos/white1.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white2.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white3.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white4.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white5.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white6.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white1.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white2.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white3.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white4.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white5.png" alt="" />
            </div>
            <div className="item">
              <img src="/logos/white6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
