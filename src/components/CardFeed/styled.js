import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite, mainDarkGray } from '../../constants/colors'




export const Wrapper = styled.div`
  max-width: 490px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 5% 0 2% 0;
`

export const CardContainer = styled.div`
   cursor: pointer;
   display: grid;
   align-items: center;
   max-width: 490px;
   box-shadow: 0px 0px 1em #666;
   -webkit-box-shadow: 5px 0px 1em #666;
   -moz-box-shadow: 0px 0px 1em #666;
   /* &:hover{
      transform: scale(1.1);
   } */
`

export const HeaderFeed = styled.div`
   border-bottom: 1px solid ${mainLightGray};
   display: flex;
   justify-content: center;
   padding-bottom: 2%;
   max-width: 490px;
   height: 6vh;
`

export const FeedCardContainer = styled.div`
   border: 1px solid ${mainLightGray};
   background-color: ${mainAntiquewhite};
   text-align: center;
   border-radius: 12px;
   max-width: 440px;
   height: 50vh;
   margin: 5%;
   &:hover{
      background-color: rgb(247, 229, 210);
   }
`

export const CardContent = styled.div`
   max-width: 400px;
   min-width: 400px;
   height: 32vh;
   margin: 2% 5%;
   word-wrap: break-word;
   text-align: center;
   overflow: auto;
`

export const NameUserPost = styled.h2`
   color: ${mainDarkPurple};
   margin-top: 2%;
`

export const Image = styled.img`
  margin-top: 2%;
  margin-right: 2%;
`

export const TitlePost = styled.h3`
   color: ${mainDarkGray};
   margin: 4% 5% 5% 1%;
`

export const FooterFeed = styled.div`
   border-top: 1px solid ${mainLightGray};
`

export const IconVotesPost = styled.img`
   width: 28px;
`

export const TextPost = styled.p`
   color: ${mainDarkGray};
   margin: 5% 4% 5% 1%;
`

export const NumberVotes = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-right: 1%;
`

export const NumberComments = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-left: 50%;
`

export const IconComents = styled.img`
   width: 28px;
   margin-left: 2%;
   margin-top: 4%;
`