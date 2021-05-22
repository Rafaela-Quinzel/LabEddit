import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants/RequestConfig'
import { PostsContainer, TitlePage } from './styled'
import { useParams } from 'react-router-dom'
import { useProtectPage } from '../../../hooks/useProtectPage'
import CardPost from '../../../components/CardPost/CardPost'



function DetailsPostsPage() {
  const [postDetails, setPostDetails] = useState([])

  useProtectPage()

  const params = useParams()


  useEffect(() => {
    GetPostDetails()
  })

  const GetPostDetails = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then((response) => {
        setPostDetails(response.data.post)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const handleComentVote = async (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    try {
      await axios.put(`${BASE_URL}/posts/${params.id}/comment/${commentId}/vote`, body, axiosConfig)
      GetPostDetails()
    } catch (error) {
      alert('Não foi posível votar no comentário')
    }
  }


  return (
    <PostsContainer>
      <TitlePage>Comentários:</TitlePage>
      {postDetails && postDetails.comments && postDetails.comments.map((item) => {
        return (
          <CardPost
            comment={item}
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            username={item.username}
            votesCount={item.votesCount}
            commentsCount={item.commentsCount}
            handleComentVote={handleComentVote}
          />
        )
      })}
    </PostsContainer>
  )
}
export default DetailsPostsPage