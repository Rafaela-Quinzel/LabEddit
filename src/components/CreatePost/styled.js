import styled from 'styled-components'
import { mainDarkPurple } from '../../constants/colors'


export const CreateContainer = styled.div`
  background: rgba(242, 243, 245, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
   

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 60px rgba(0, 0, 0.4, 0.5);
  border-radius: 10px;
  position: fixed;  
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    height: 65vh;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }


  @media screen and (min-width: 1080px) {
    width: 50%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  width: 50px;
  margin: 40px auto 5px auto;

  @media screen and (min-width: 1080px) {
    width: 100px;
    margin: 10% auto 2% auto;
  }
`

export const TitlePage = styled.p`
  color: ${mainDarkPurple};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  margin: 5% 0 2% 0;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  align-self: center;
  width: 85%;
  height: 50%;
  border-radius: 2px;

  @media screen and (min-width: 1024px) {
    width: 75%;
  }
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  width: 50%;
  height: 40%;
  margin: 10px auto;

  @media screen and (min-width: 600px) {
    width: 25%;
  }
`