import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Masonry from 'react-masonry-component'
import { kebabCase } from 'lodash'

import Header from '../components/header'
import Footer from '../components/footer'
import Filters from '../states/filters'
import Projects from '../states/projects'

export default () => {
  const [filters, setFilters] = useState(Filters)
  const [projects, setProjects] = useState(Projects)

  const filterReset = () => {
    setFilters(Filters)
    setProjects(Projects)
  }
  const filterProjects = category => {
    setFilters(
      Filters.map(filter => ({
        ...filter,
        value: filter.category === category ? true : false
      }))
    )
    setProjects(Projects.filter(project => project.category === category))
  }

  return (
    <>
      <Head>
        <title>Ludovic Lacouture | Projects</title>
      </Head>
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
                  I'm madly in love with my wife
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
            <div className="portfolio-filter" id="portfolio-filter">
              <ul id="filter">
                <li>
                  <a
                    className={filters[0].value ? 'current' : ''}
                    onClick={filterReset}
                  >
                    all
                  </a>
                </li>
                <li>
                  <a
                    className={filters[1].value ? 'current' : ''}
                    onClick={() => filterProjects('Web Development')}
                  >
                    web development
                  </a>
                </li>
                <li>
                  <a
                    className={filters[2].value ? 'current' : ''}
                    onClick={() => filterProjects('App Development')}
                  >
                    app development
                  </a>
                </li>
                <li>
                  <a
                    className={filters[3].value ? 'current' : ''}
                    onClick={() => filterProjects('Web Design')}
                  >
                    web design
                  </a>
                </li>
                <li>
                  <a
                    className={filters[4].value ? 'current' : ''}
                    onClick={() => filterProjects('App Design')}
                  >
                    app design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="in-container have-space" id="projects-grid">
          <Masonry>
            {projects.map(project => (
              <Link
                key={project.id}
                href="/project"
                as={`/projects/${kebabCase(project.name)}`}
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
