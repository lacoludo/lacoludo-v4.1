import Link from 'next/link'
import Masonry from 'react-masonry-component'

import Header from '../components/header'
import Footer from '../components/footer'

export default () => {
  const initialData = [
    {
      id: 1,
      name: 'Diviya Lacouture',
      category: 'Web Development',
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
  let data = initialData
  const filterReset = () => []
  const filterWebDev = () => []
  const filterAppDev = () => []
  const filterWebDes = () => []
  const filterAppDes = () => []

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
            <div className="portfolio-filter" id="portfolio-filter">
              <ul id="filter">
                <li>
                  <a className="current" href="" onClick={filterReset}>
                    all
                  </a>
                </li>
                <li className="">
                  <a href="" onClick={filterWebDev}>
                    web development
                  </a>
                </li>
                <li className="">
                  <a href="" onClick={filterAppDev}>
                    app development
                  </a>
                </li>
                <li className="">
                  <a href="" onClick={filterWebDes}>
                    web design
                  </a>
                </li>
                <li className="">
                  <a href="" onClick={filterAppDes}>
                    app design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="in-container have-space" id="projects-grid">
          <Masonry>
            {data.map(project => (
              <Link
                key={project.id}
                href="/projects/[project.id]"
                as={`/projects/${project.name}`}
              >
                <a className="portfolio-box-1 half-width have-space">
                  <img src={project.image} alt={project.name} />
                </a>
              </Link>
            ))}
          </Masonry>
        </div>
      </div>
      <Footer />
    </>
  )
}
