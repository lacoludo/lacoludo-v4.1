const Technologies = {
  clients: [
    {
      type: 'web',
      browsers: [
        {
          name: 'Google Chrome',
          icon: 'chrome-plain'
        },
        {
          name: 'Firefox',
          icon: 'firefox-plain'
        },
        {
          name: 'Internet Explorer',
          icon: 'ie10-original'
        },
        {
          name: 'Safari',
          icon: 'safari-plain'
        }
      ],
      languages: [
        {
          name: 'HTML',
          icon: 'html5-plain'
        },
        {
          name: 'CSS',
          icon: 'css3-plain',
          frameworks: [
            {
              name: 'Bootstrap',
              icon: 'bootstrap-plain'
            }
          ]
        },
        {
          name: 'JavaScript',
          icon: 'javascript-plain',
          frameworks: [
            {
              name: 'Angular',
              icon: 'angularjs-plain'
            }
          ],
          libraries: [
            {
              name: 'jQuery',
              icon: 'jquery-plain'
            },
            {
              name: 'React',
              icon: 'react-original'
            }
          ]
        },
        {
          name: 'Sass',
          icon: 'sass-original'
        },
        {
          name: 'TypeScript',
          icon: 'typescript-plain'
        }
      ]
    },
    {
      type: 'mobile',
      operatingSystems: [
        {
          name: 'Android',
          icon: 'android-plain'
        },
        {
          name: 'iOS',
          icon: 'apple-original'
        }
      ],
      languages: [
        {
          name: 'JavaScript',
          icon: 'javascript-plain',
          libraries: [
            {
              name: 'React Native',
              icon: 'react-original'
            }
          ]
        }
      ]
    },
    {
      type: 'desktop',
      operatingSystems: [
        {
          name: 'Windows',
          icon: 'windows8-original'
        },
        {
          name: 'macOS',
          icon: 'apple-original'
        },
        {
          name: 'Linux',
          icon: 'linux-plain'
        }
      ],
      languages: [
        {
          name: 'JavaScript',
          icon: 'javascript-plain',
          libraries: [
            {
              name: 'Electron',
              icon: 'electron-original'
            }
          ]
        }
      ]
    }
  ],
  server: {
    languages: [
      {
        name: 'Node.js',
        icon: 'nodejs-plain'
      },
      {
        name: 'JavaScript',
        icon: 'javascript-plain',
        frameworks: [
          {
            name: 'Express',
            icon: 'express-original'
          }
        ]
      },
      {
        name: 'PHP',
        icon: 'php-plain',
        frameworks: [
          {
            name: 'Symfony',
            icon: 'symfony-original'
          }
        ]
      },
      {
        name: 'Java',
        icon: 'java-plain'
      },
      {
        name: 'Scala',
        icon: 'scala-plain'
      },
      {
        name: 'Python',
        icon: 'python-plain'
      }
    ]
  },
  databases: [
    {
      name: 'MongoDB',
      icon: 'mongodb-plain'
    },
    {
      name: 'MySQL',
      icon: 'mysql-plain'
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql-plain'
    }
  ]
}

export default Technologies
