import Data from '../constants/data.constant'

const Projects = [
  ...Data.map(({ name, categories, picture }) => ({
    name,
    categories,
    picture
  }))
]

export default Projects
