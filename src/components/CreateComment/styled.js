import styled from 'styled-components'


export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;  
  width: 85%;
  margin: 10px auto;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 0 auto;
  width: 40%;

  @media screen and (min-width: 600px) {
    width: 25%;
  }
`
