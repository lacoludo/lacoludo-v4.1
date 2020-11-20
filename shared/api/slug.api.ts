import kebabCase from 'lodash.kebabcase'

import Data from '../../projects/constants/data.constant'

export const readProjects = () =>
  Promise.resolve(
    Data.map(posts => ({
      params: {
        slug: kebabCase(posts.name)
      }
    }))
  )

export const readProject = ({ slug }: any) =>
  Promise.resolve(Data.filter(data => kebabCase(data.name) === slug)[0])
