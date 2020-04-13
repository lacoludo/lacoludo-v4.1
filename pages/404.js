import styled from 'styled-components'

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorCode = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  padding: 10px 23px 10px 0;
  margin-right: 20px;
  border-right: 1px solid #fff;
`

export default () => (
  <ErrorWrapper>
    <ErrorCode>404</ErrorCode>
    <div>This page could not be found.</div>
  </ErrorWrapper>
)
