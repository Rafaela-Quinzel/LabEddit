import React from 'react'
import * as S from './styled'
import ButtonVoteUp from '../../assets/voteup.svg'
import ButtonVoteDown from '../../assets/votedown.svg'
import ImageLogo from '../../assets/astronauta.svg'


function CardPost(props) {

  const handleUpVote = () => {
    if (props.comment.userVoteDirection === 1) {
      props.handleComentVote(props.comment.id, 0)
    } else {
      props.handleComentVote(props.comment.id, 1)
    }
  }

  const handleDownVote = () => {
    if (props.comment.userVoteDirection === -1) {
      props.handleComentVote(props.comment.id, 0)
    } else {
      props.handleComentVote(props.comment.id, -1)
    }
  }

  return (
    <div>
      <S.CardContainer>
        <S.PostCardContainer>
          <S.HeaderPost>
          <S.Image src={ImageLogo} alt={ImageLogo} />
            <S.NameUserPost>
              {props.username}
            </S.NameUserPost>
          </S.HeaderPost>

          <S.CardContent>
            <p>{props.title}</p>
            <S.TextPost>{props.text}</S.TextPost>
          </S.CardContent>
          <S.FooterPost>
            <S.ButtonVote>
              <S.IconButtonVote
                onClick={handleUpVote}
                src={ButtonVoteUp}
                alt={ButtonVoteUp}
              />
            <S.NumberVotes>{props.votesCount}</S.NumberVotes>
              <S.IconButtonVote
                onClick={handleDownVote}
                src={ButtonVoteDown}
                alt={ButtonVoteDown}
              />
            </S.ButtonVote>
          </S.FooterPost>
        </S.PostCardContainer>
      </S.CardContainer>
    </div>
  )
}
export default CardPost