import styled from 'styled-components'
import { typography } from 'styled-system'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #000000;
  display: flex;
  overflow-x: auto;
  z-index: 1;
`

const Logo = styled.div`
  ${typography}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.1s ease-in-out;
`

const HeaderComponent = () => (
  <>
    <HeaderWrapper>
      <Logo>Lacouture Ludovic</Logo>
    </HeaderWrapper>
  </>
)

export default HeaderComponent
