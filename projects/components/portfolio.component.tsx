import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-component'
import { Tooltip } from 'react-tippy'
import kebabCase from 'lodash.kebabcase'

import Filters from '../states/filters.state'
import Projects from '../states/projects.state'

const Portfolio = () => {
  const [filters, setFilters] = useState(Filters)
  const [projects, setProjects] = useState(Projects)

  const filterReset = () => {
    setFilters(Filters)
    setProjects(Projects)
  }
  const filterProjects = (filterCategory: string) => {
    setFilters(
      Filters.map(filter => ({
        ...filter,
        value: filter.label === filterCategory ? true : false
      }))
    )
    setProjects(
      Projects.filter(project =>
        project.categories.some(
          projectCategory => projectCategory === filterCategory
        )
      )
    )
  }

  return (
    <div className='section padding-top-bottom background-black'>
      <div className='container'>
        <div className='twelve columns'>
          <div className='portfolio-filter' id='portfolio-filter'>
            <ul id='filter'>
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
      <div className='in-container have-space' id='projects-grid'>
        <Masonry>
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${kebabCase(project.name)}`}>
              <a className='portfolio-box-1 half-width have-space'>
                <Tooltip
                  followCursor={true}
                  position='bottom'
                  html={
                    <>
                      <div>{project.name}</div>
                      {project.categories.map((category, index) => (
                        <div key={index}>{category}</div>
                      ))}
                    </>
                  }
                >
                  <Image
                    src={project.picture}
                    alt={project.name}
                    width={800}
                    height={project.height}
                  />
                </Tooltip>
              </a>
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Portfolio
