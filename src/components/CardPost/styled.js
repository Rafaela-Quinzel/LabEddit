import styled from 'styled-components'
import {
   mainLightGray,
   mainDarkPurple,
   mainAntiquewhite,
   mainDarkGray
} from '../../constants/colors'


export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
`

export const PostCardContainer = styled.div`
   border: 1px solid ${mainLightGray};
   border-radius: 12px;
   width: 80vw;
   height: 20vh;
   margin: 15px auto;

   @media screen and (min-width: 1024px) {
      height: 30vh;
      width: 50vw;
   }
`

export const HeaderPost = styled.div`
   border-bottom: 1px solid ${mainLightGray};
   width: 100%;
   height: 4vh;

   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (min-width: 1024px) {
      height: 6vh;
   }
`

export const Image = styled.img`
  width: 15px;
  margin-right: 5px;

   @media screen and (min-width: 1024px) {
      width: 22px;
   }
`

export const NameUserPost = styled.h3`
   color: ${mainDarkPurple};
   font-size: 1rem;
`

export const CardContent = styled.div`
   background-color: ${mainAntiquewhite};
   width: 100%;
   height: 58%;
   word-wrap: break-word;
   overflow: auto;

   display: flex;
   justify-content: center;

   @media screen and (min-width: 1080px) {
      height: 60%;
   }
`

export const TextPost = styled.p`
   color: ${mainDarkGray};
   margin: 4% 4%;
   font-size: 0.9rem;
`

export const FooterPost = styled.div`
   border-top: 1px solid ${mainLightGray};
   box-sizing: border-box;
   display: flex;
   align-items: center;
   justify-content: start;
   width: 100%;
   height: 20%;
   position: relative;
`

export const ButtonVote = styled.span`
   color: ${mainDarkPurple};
   display: flex;
   justify-content: space-around;
   width: 90px;
   margin-left: 15px;
`

export const IconButtonVote = styled.img`
   width: 20px;

   @media screen and (min-width: 1080px) {
      cursor: pointer;

      &:hover{
        transform: scale(1.2);
      }
   }  
`

export const NumberVotes = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
`



