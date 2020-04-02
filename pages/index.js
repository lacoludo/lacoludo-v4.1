import Link from 'next/link'

export default () => {
  const projectsData = [
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

  const projects = projectsData.map(project => (
    <div key={project.id}>
      <Link href="/projects/[project.id]" as={`/projects/${project.name}`}>
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
  ))

  return (
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
                    <a>Portfolio</a>
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

      <div className="section big-height background-black">
        <div className="parallax fade-elements" id="#home-image"></div>
        <div className="dark-over-2"></div>
        <div className="home-text-wrap fade-elements">
          <div className="container">
            <div className="twelve columns">
              <div className="home-text-freelance">
                <h1>
                  je t'aime
                  <br />
                  <span className="image2">Diviya</span>
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
          {projects}
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
}
