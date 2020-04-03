import Link from 'next/link'
import Masonry from 'react-masonry-component'

import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

export default () => {
  const data = [
    {
      id: 1,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/1.jpg'
    },
    {
      id: 2,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/2.jpg'
    },
    {
      id: 3,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/3.jpg'
    },
    {
      id: 4,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/4.jpg'
    },
    {
      id: 5,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/5.jpg'
    },
    {
      id: 6,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/6.jpg'
    },
    {
      id: 7,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/7.jpg'
    },
    {
      id: 8,
      name: 'Diviya Lacouture',
      category: 'Web Design',
      image: '/portfolio/8.jpg'
    }
  ]

  const masonryOptions = {
    transitionDuration: 0
  }

  return (
    <>
      <Header />
      <div className="section big-height background-black">
        <div
          className="parallax fade-elements"
          style={{ backgroundImage: 'url(/parallax-home.jpg)' }}
        ></div>
        <div className="dark-over-2"></div>
        <div className="home-text-wrap fade-elements">
          <div className="container">
            <div className="twelve columns">
              <div className="home-text-freelance">
                <h1>
                  i love
                  <br />
                  <span className="image2">diviya</span>
                </h1>
              </div>
            </div>
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
          {data.map(project => (
            <div key={project.id}>
              <Link
                href="/projects/[project.id]"
                as={`/projects/${project.name}`}
              >
                <a
                  className="tipped"
                  data-title={`<em>${project.category}</em><br><strong>${project.name}</strong`}
                  data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
                >
                  <div className="portfolio-box-1 half-width have-space branding">
                    <img src={project.image} alt={project.name} />
                  </div>
                </a>
              </Link>
            </div>
          ))}
          {/* <Masonry
            className={''} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {data.map(project => (
              <div key={project.id}>
                <Link
                  href="/projects/[project.id]"
                  as={`/projects/${project.name}`}
                >
                  <a
                    className="tipped"
                    data-title={`<em>${project.category}</em><br><strong>${project.name}</strong`}
                    data-tipper-options='{"direction":"bottom","follow":"true","margin":35}'
                  >
                    <div className="portfolio-box-1 half-width have-space branding">
                      <img src={project.image} alt={project.name} />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </Masonry> */}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
