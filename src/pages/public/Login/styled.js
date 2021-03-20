import styled from "styled-components"
import { primaryColor } from '../../../constants/colors'


export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  max-width: 465px;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 200px;
  margin: 10% auto 2% auto;
`

export const Title = styled.h1`
  color: ${primaryColor};
  margin: 0 auto 6% auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-around;
  margin: 5%;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  margin: 20px 0 20px;
`
