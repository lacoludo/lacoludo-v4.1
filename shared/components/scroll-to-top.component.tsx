import ScrollUp from 'react-scroll-up'
import { Tooltip } from 'react-tippy'

const ScrollToTop = () => (
  <>
    <ScrollUp
      showUnder={525}
      style={{ right: '45px', bottom: '150px', zIndex: 5 }}
    >
      <Tooltip followCursor={true} position='bottom' title='Top'>
        <div className='scroll-to-top'></div>
      </Tooltip>
    </ScrollUp>
  </>
)

export default ScrollToTop
