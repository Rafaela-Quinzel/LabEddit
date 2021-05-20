import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite, mainDarkGray } from '../../constants/colors'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

   @media screen and (min-width: 1080px) {
      max-width: 490px;
      display: flex;
      flex-direction: column;
      align-self: center;
      margin: 5% 0 2% 0;
   }
`

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   height: 60vh;
   margin: 120px auto 10px;
   box-shadow: 0px 0px 1em #666;
   -webkit-box-shadow: 5px 0px 1em #666;
   -moz-box-shadow: 0px 0px 1em #666;

   @media screen and(min-width: 1080px) {
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
   }
`

export const HeaderFeed = styled.div`
   border-bottom: 1px solid ${mainLightGray};
   display: flex;
   justify-content: center;
   align-items: center;
   padding-bottom: 2%;
   width: 100%;
   height: 6vh;
   /* border: 1px solid purple; */

   @media screen and (min-width: 1080px) {
      padding-bottom: 2%;
      max-width: 490px;
      height: 6vh;
   }
`

export const NameUserPost = styled.h2`
   color: ${mainDarkPurple};
   margin-left: 10px;
   font-size: 1rem;
`

export const Image = styled.img`
  width: 28px;
`

export const FeedCardContainer = styled.div`
   border: 1px solid ${mainLightGray};
   background-color: ${mainAntiquewhite};
   text-align: center;
   border-radius: 12px;
   width: 70vw;
   height: 100vh;
   margin: 5%;


   @media screen and (min-width: 1080px) {
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
   }
`

export const CardContent = styled.div`
   width: 90%;
   height: 65%;
   margin: 5px auto 5px auto;
   word-wrap: break-word;
   text-align: center;
   overflow: auto;
   border: 1px solid green;

   @media screen and (min-width: 1080px) {
      max-width: 400px;
      min-width: 400px;
      height: 32vh;
      margin: 2% 5%;
      word-wrap: break-word;
      text-align: center;
      overflow: auto;
   }
`

export const TitlePost = styled.h3`
   color: ${mainDarkGray};
   margin: 4% 5% 5% 1%;
`

export const FooterFeed = styled.div`
   border-top: 1px solid ${mainLightGray};
   width: 100%;
   position: relative;
   /* border: 1px solid blue; */
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