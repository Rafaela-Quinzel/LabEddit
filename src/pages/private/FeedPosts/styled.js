import styled from 'styled-components'
import { mainDarkPurple } from '../../../constants/colors'
import Fab from '@material-ui/core/Fab'



export const FeedContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const TitlePage = styled.h1`
   color: ${mainDarkPurple};
`

export const FabStyled = styled(Fab)`
   position: fixed;
   right: 20px;
   bottom: 20px;
`