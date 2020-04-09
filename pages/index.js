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
  const filterWebDev = () => {
    setFilters(
      Filters.map((value, index) =>
        index === 1 ? (value = true) : (value = false)
      )
    )
    setProjects(
      Projects.filter(project => project.category === 'Web Development')
    )
  }
  const filterAppDev = () => {
    setFilters(
      Filters.map((value, index) =>
        index === 2 ? (value = true) : (value = false)
      )
    )
    setProjects(
      Projects.filter(project => project.category === 'App Development')
    )
  }
  const filterWebDes = () => {
    setFilters(
      Filters.map((value, index) =>
        index === 3 ? (value = true) : (value = false)
      )
    )
    setProjects(Projects.filter(project => project.category === 'Web Design'))
  }
  const filterAppDes = () => {
    setFilters(
      Filters.map((value, index) =>
        index === 4 ? (value = true) : (value = false)
      )
    )
    setProjects(Projects.filter(project => project.category === 'App Design'))
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
                  <a
                    className={filters[0] ? 'current' : ''}
                    onClick={filterReset}
                  >
                    all
                  </a>
                </li>
                <li>
                  <a
                    className={filters[1] ? 'current' : ''}
                    onClick={filterWebDev}
                  >
                    web development
                  </a>
                </li>
                <li>
                  <a
                    className={filters[2] ? 'current' : ''}
                    onClick={filterAppDev}
                  >
                    app development
                  </a>
                </li>
                <li>
                  <a
                    className={filters[3] ? 'current' : ''}
                    onClick={filterWebDes}
                  >
                    web design
                  </a>
                </li>
                <li>
                  <a
                    className={filters[4] ? 'current' : ''}
                    onClick={filterAppDes}
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
