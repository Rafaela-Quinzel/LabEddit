import React, { useState } from 'react'
import { FeedContainer, FabStyled } from './styled'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useUnProtectedPage } from '../../../hooks/useUnProtectedPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/RequestConfig'
import CardFeed from '../../../components/CardFeed/CardFeed'
import CircularIndeterminate from '../../../components/Loading/Loading'
import CreatePost from '../../../components/CreatePost/CreatePost'
import { Fragment } from 'react'




function FeedPostsPage() {
    const [open, setOpen] = useState(false)

    useProtectPage()
    useUnProtectedPage()


    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = (event) => {
        event.preventDefault()
        setOpen(false)
    }

    const getPosts = useRequestData(`${BASE_URL}/posts`, {})


    return (
        <FeedContainer>
            {!getPosts.posts ? <CircularIndeterminate /> : (
                <Fragment>
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
                </Fragment>
            )}
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
    )
}
export default FeedPostsPage