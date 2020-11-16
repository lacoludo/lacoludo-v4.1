import Data from '../constants/data.constant'

const Projects = [
  ...Data.map(({ id, name, categories, picture }) => ({
    id,
    name,
    categories,
    picture
  }))
]

export default Projects
