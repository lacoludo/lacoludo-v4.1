import { useEffect } from 'react'

export default () =>
  useEffect(() => {
    const docElem = document.documentElement,
      header = document.querySelector('.cbp-af-header'),
      changeHeaderOn = 300
    let didScroll = false

    const init = () => {
      scrollPage()
      window.addEventListener(
        'scroll',
        () => {
          if (!didScroll) {
            didScroll = true
            setTimeout(scrollPage, 250)
          }
        },
        false
      )
    }

    const scrollPage = () => {
      const sy = scrollY()
      if (sy >= changeHeaderOn) {
        header.classList.add('cbp-af-header-shrink')
      } else {
        header.classList.remove('cbp-af-header-shrink')
      }
      didScroll = false
    }

    const scrollY = () => {
      return window.pageYOffset || docElem.scrollTop
    }

    init()
  }, [])
