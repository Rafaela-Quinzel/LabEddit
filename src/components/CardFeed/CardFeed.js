import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'
import { goToDetailsPost } from '../../routes/coordinator'
import ImageLogo from '../../assets/astronauta.svg'
import IconVotes from '../../assets/votes.svg'
import ComentIcon from '../../assets/coments.svg'
import CreateComment from '../CreateComment/CreateComment'


function CardFeed(props) {

  const history = useHistory()


  return (
    <S.Wrapper>
      <S.CardContainer >
        <S.FeedCardContainer onClick={() => goToDetailsPost(history, props.id)}>
          <S.HeaderFeed>
            <S.Image src={ImageLogo} alt={ImageLogo} />
            <S.NameUserPost>{props.username}</S.NameUserPost>
          </S.HeaderFeed>
          <S.CardContent>
            <S.TitlePost>{props.title}</S.TitlePost>
            <S.TextPost>{props.text}</S.TextPost>
          </S.CardContent>
          <S.FooterFeed>
            <S.NumberVotes>{props.votesCount}</S.NumberVotes>
            <S.IconVotesPost src={IconVotes} alt={IconVotes} />
            <S.NumberComments>
              {props.commentsCount}
            </S.NumberComments>
            <S.IconComents
              src={ComentIcon}
              alt={ComentIcon}
            />
          </S.FooterFeed>
        </S.FeedCardContainer>
        <CreateComment id={props.id} />
      </S.CardContainer>
    </S.Wrapper>
  )
}

export default CardFeed