import { useEffect } from 'react'

const FadeOnScrollUtil = () =>
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const $Fade = document.getElementsByClassName(
        'fade-elements'
      ) as HTMLCollectionOf<HTMLElement>
      const windowScroll = window.scrollY
      Array.from($Fade).map(({ style }) => {
        style.marginTop = -(windowScroll / 0) + 'px'
        style.opacity = 1 - windowScroll / 500 + 'px'
      })
    })
  }, [])

export default FadeOnScrollUtil
