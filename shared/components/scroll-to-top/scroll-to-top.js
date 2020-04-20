import styled from 'styled-components'
import ScrollUp from 'react-scroll-up'
import { Tooltip } from 'react-tippy'

const ScrollToTop = styled.div`
  background-image: url('/up-arrow.png');
  background-size: 30px 30px;
  height: 30px;
  width: 30px;
  opacity: 0.8;
  transition: all 300ms linear;
  &:hover {
    opacity: 1;
  }
`

export default () => (
  <>
    <ScrollUp
      showUnder={525}
      style={{ right: '45px', bottom: '150px', zIndex: 5 }}
    >
      <Tooltip
        followCursor='true'
        position='bottom'
        title='Top'
        touchHold='true'
      >
        <ScrollToTop />
      </Tooltip>
    </ScrollUp>
  </>
)
