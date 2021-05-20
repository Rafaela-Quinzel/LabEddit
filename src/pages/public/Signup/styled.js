import styled from "styled-components"
import { primaryColor } from '../../../constants/colors'
import { Button } from '@material-ui/core'

export const SignupPageContainer = styled.div`
 display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 40%;
  row-gap: 1.4em;
  margin: 5px auto 10px auto;

  @media screen and (min-width:1080px) {
    width: 30%;
    height: 50%;
    margin: 15px auto 10px auto;
  }
`

export const Logo = styled.img`
  width: 80px;
  margin: 45px auto 0 auto;
`

export const Title = styled.h3`
  color: ${primaryColor};
  margin: 5px auto 10px auto;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  width: 50vw;
  height: 20vh;
  margin: 10px auto;

  @media screen and (min-width: 1080px) {
    width: 15vw;
    height: 4vh;
  }
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  height: 5vh;
`
