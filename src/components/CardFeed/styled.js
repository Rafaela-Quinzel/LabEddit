import styled from 'styled-components'
import {
   mainLightGray,
   mainDarkPurple,
   mainAntiquewhite,
   mainDarkGray
} from '../../constants/colors'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-top: 100px;
`

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 85vw;
   height: 50vh;
   margin: 0 auto;
   box-shadow: 0px 0px 1em #666;
   -webkit-box-shadow: 5px 0px 1em #666;
   -moz-box-shadow: 0px 0px 1em #666;
   
   @media screen and (min-width: 1024px) {
      height: 70vh;
      width: 60vw;
   }

   @media screen and (min-width: 1080px) {
      height: 60vh;
      width: 45vw;
   }

`

export const FeedCardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 1px solid ${mainLightGray};
   background-color: ${mainAntiquewhite};
   text-align: center;
   border-radius: 12px;
   width: 75vw;
   height: 30vh;
   margin: 22px auto 5px auto;

   @media screen and (min-width: 1024px) {
      height: 50vh;
      width: 50vw;
   }

   @media screen and (min-width: 1080px) {
      width: 40vw;
      height: 35vh;
   }
`

export const HeaderFeed = styled.div`
   border-bottom: 1px solid ${mainLightGray};
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 6vh;
`

export const Image = styled.img`
  width: 25px;
`

export const NameUserPost = styled.h2`
   color: ${mainDarkPurple};
   margin-left: 10px;
   font-size: 1rem;
`

export const CardContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
   width: 100%;
   height: 75%;
   padding: 35px 10px 20px 10px;
   word-wrap: break-word;
   overflow: auto;
`

export const TitlePost = styled.h3`
   color: ${mainDarkGray};
   margin: 5px auto 8px auto;
   font-size: 1rem;
`

export const TextPost = styled.p`
   color: ${mainDarkGray};
   font-size: 0.85rem;
   width: 95%;
   height: 100%;
`

export const FooterFeed = styled.div`
   border-top: 1px solid ${mainLightGray};
   width: 100%;
   height: 45px;
   position: relative;
   box-sizing: border-box;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`

export const NumberVotes = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-right: 1%;
`

export const IconVotesPost = styled.img`
   width: 20px;
`

export const NumberComments = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-left: 50%;
`

export const IconComents = styled.img`
   width: 20px;
   margin-left: 2%;
`