import {
  ludovicLacouture,
  katleenTraversier,
  jeanneSibon,
  ophelieGigou,
  sebastienCoudoin,
  abdoulayeMaiga
} from './creators.constant'
import {
  lyceeFrancaisPondichery,
  ECVDigital,
  wemblee
} from './associated.constant'
import { dateParse } from '../../shared/utils/date.util'

const Data = [
  {
    id: 1,
    name: 'Personal website: Ludovic Lacouture v1',
    working: false,
    date: {
      start: dateParse('01/03/2009'),
      end: dateParse('01/04/2009')
    },
    creators: [ludovicLacouture],
    associated: lyceeFrancaisPondichery,
    url: '',
    description: `My very first personal website coded in HTML and CSS. I learned in 8th grade in Technology class at Lycée Français de Pondichéry.
    
        (Thanks to my teacher Mr Bruno Onesta)`,
    categories: ['Web Design', 'Web Development'],
    picture: '/portfolio/1.jpg'
  },
  {
    id: 2,
    name: 'Savencia: Mon bon fromage',
    working: false,
    date: {
      start: dateParse('01/01/2016'),
      end: dateParse('01/02/2016')
    },
    creators: [ludovicLacouture, katleenTraversier, jeanneSibon, ophelieGigou],
    associated: ECVDigital,
    url: '',
    description: `4th place in the Savencia competition organized by ECV Design & ECV Digital
    
        Mission :
        - develop a digital strategy for big retail outlets to create awareness of the brands of Savencia`,
    categories: ['App Design', 'App Development'],
    picture: '/portfolio/2.jpg'
  },
  {
    id: 3,
    name: 'Personal website: Ludovic Lacouture v2',
    working: false,
    date: {
      start: dateParse('01/01/2016'),
      end: dateParse('01/02/2016')
    },
    creators: [ludovicLacouture],
    associated: {},
    url: '',
    description:
      '7 years later after the 1st version, I worked on my personal website with the famous front-end framework Bootstrap and with some animations in JavaScript and SVG.',
    categories: ['Web Design', 'Web Development'],
    picture: '/portfolio/3.jpg'
  },
  {
    id: 4,
    name: 'Wemblee: Notaprom v1',
    working: false,
    date: {
      start: dateParse('01/03/2016'),
      end: dateParse('01/08/2016')
    },
    creators: [ludovicLacouture, sebastienCoudoin, abdoulayeMaiga],
    associated: wemblee,
    url: '',
    description: '',
    categories: ['Web Design', 'Web Development'],
    technologies: {
      clients: [
        {
          type: 'web',
          languages: [
            {
              name: 'HTML'
            },
            {
              name: 'CSS'
            }
          ]
        }
      ],
      server: {
        languages: [
          {
            name: 'Java'
          },
          {
            name: 'Scala'
          }
        ]
      },
      database: {
        languages: [
          {
            name: 'MySQL'
          }
        ]
      }
    },
    picture: '/portfolio/4.jpg'
  },
  {
    id: 5,
    name: 'Personal website: Ludovic Lacouture v3',
    working: false,
    date: {
      start: dateParse('01/07/2016'),
      end: dateParse('01/08/2016')
    },
    creators: [ludovicLacouture],
    associated: {},
    url: '',
    description:
      'A few months later, I finally put all my projects on my portfolio and I detailed a lot about my skills and my background.',
    categories: ['Web Design', 'Web Development'],
    picture: '/portfolio/5.jpg'
  }
]

console.log(Data)

export default Data
