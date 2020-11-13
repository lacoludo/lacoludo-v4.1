import { FC } from 'react'
import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

type Props = ColorProps & TypographyProps

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorCode: FC<Props> = styled.h1`
  ${color}
  ${typography}
  font-weight: 400;
  padding: 10px 23px 10px 0;
  margin-right: 20px;
  border-right: 1px solid #fff;
`

const ErrorMessage: FC<Props> = styled.div`
  ${typography}
`

const Custom404 = () => (
  <ErrorWrapper>
    <ErrorCode color='danger' fontSize={[4, 5, 6, 7]}>
      404
    </ErrorCode>
    <ErrorMessage fontSize={[0, 1, 2, 3]}>
      This page could not be found.
    </ErrorMessage>
  </ErrorWrapper>
)

export default Custom404
