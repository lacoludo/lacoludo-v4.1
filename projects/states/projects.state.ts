import Data from '../constants/data.constant'

const Projects = [
  ...Data.map(({ name, categories, picture, height }) => ({
    name,
    categories,
    picture,
    height
  }))
]

export default Projects
