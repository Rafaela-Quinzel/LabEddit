import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FeedContainer, FabStyled } from './styled'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useUnProtectedPage } from '../../../hooks/useUnProtectedPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/RequestConfig'
import CardFeed from '../../../components/CardFeed/CardFeed'
import LoadingInfo from '../../../components/Loading/LoadingInfo'
import CreatePost from '../../../components/CreatePost/CreatePost'




function FeedPostsPage() {
    const [open, setOpen] = useState(false)

    useProtectPage()
    useUnProtectedPage()

    const history = useHistory()

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = (event) => {
        event.preventDefault()
        setOpen(false)
    }

    const getPosts = useRequestData(`${BASE_URL}/posts`, {})


    return getPosts ? (
        <FeedContainer>
            { getPosts && getPosts.posts && getPosts.posts.map((item) => {
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
            {open ? (
                <CreatePost
                close={handleClose}
                />
            ) : (
            <FabStyled color='secondary' onClick={handleOpen}>
                ➕
            </FabStyled>
)}

        </FeedContainer>

    ) : (
        <FeedContainer>
            <LoadingInfo />
        </FeedContainer>
    )
}
export default FeedPostsPage