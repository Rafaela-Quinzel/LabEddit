import styled from "styled-components"
import { primaryColor } from '../../../constants/colors'
import { Button } from '@material-ui/core'


export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export const Logo = styled.img`
  width: 80px;
  margin: 40px auto 10px auto;

  @media screen and (min-width: 1024px) {
    width: 200px;
    margin: 50px auto 10px auto;
  }
`

export const Title = styled.h1`
  color: ${primaryColor};
  margin: 0 auto 6% auto;

  @media screen and (min-width: 1080px) {
    margin: 0 auto 15px auto;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 40%;
  justify-content: space-around;
  margin: 15px auto 10px auto;

  @media screen and (min-width:1080px) {
    margin: 0 auto 10px auto;
    width: 30%;
    height: 30%;
  }

`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  width: 50vw;
  margin: 15px auto;

  @media screen and (min-width: 1080px) {
    width: 15vw;
    height: 4vh;
  }
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  height: 5vh;
`
