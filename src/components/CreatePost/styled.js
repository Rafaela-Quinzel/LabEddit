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
`

export const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 60px rgba(0, 0, 0.4, 0.5);
  border-radius: 10px;
  position: fixed;  
  width: 100%;
  max-width: 420px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 338px;
  max-width: 300px;
  border-radius: 2px;
  margin-bottom: 2%;
`

export const Logo = styled.img`
  width: 100px;
  margin: 10% auto 2% auto;
`

export const TitlePage = styled.p`
  color: ${mainDarkPurple};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  margin: 5% 0 2% 0;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`