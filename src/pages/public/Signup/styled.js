import styled from "styled-components"
import { primaryColor } from '../../../constants/colors'

export const SignupPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const Logo = styled.img`
  width: 130px;
  margin: 10% auto 25% auto;
`

export const Title = styled.h3`
  color: ${primaryColor};
  margin: 10% auto 2% auto;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`
