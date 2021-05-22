import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'


export const LoadingContainer = styled.div`
  height: 50vh;
  width: 100vw;
  margin: 90px auto;
  word-wrap: break-word;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.h2`
  color: ${primaryColor};
  margin-bottom: 50px;
`