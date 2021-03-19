import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FeedContainer, FabStyled } from './styled'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/RequestConfig'
import CardFeed from '../../../components/CardFeed/CardFeed'
import { goToCreatePost } from '../../../routes/coordinator'
import { LinearProgress } from '@material-ui/core'


function FeedPostsPage() {
    const [isLoading, setIsLoading] = useState(false)

    //useProtectPage() //Proteção da página

    const history = useHistory()

    useEffect(() => {
        if (getPosts.length === 0) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    })


    const getPosts = useRequestData(`${BASE_URL}/posts`, {})


    return (
        <FeedContainer>
            {isLoading && <LinearProgress />}
            {getPosts && getPosts.posts && getPosts.posts.map((item) => {
                return (
                    <CardFeed
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        username={item.username}
                        votesCount={item.votesCount}
                        commentsCount={item.commentsCount}
                    />
                )
            })}
            <FabStyled color='secondary' onClick={() => goToCreatePost(history)}>
                ➕
            </FabStyled>

        </FeedContainer>
    )
}
export default FeedPostsPage