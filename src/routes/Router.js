import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/public/Login/LoginPage'
import SignupPage from '../pages/public/Signup/SignupPage'
import DetailsPostPage from '../pages/private/DetailsPost/DetailsPostPage'
import FeedPostsPage from '../pages/private/FeedPosts/FeedPostsPage'
import CreateComment from '../components/CreateComment/CreateComment'
import NotFoundPage from '../pages/public/NotFound/NotFoundPage'



const Router = () => {
    return (
        <Switch>
             <Route exact path="/">
                <LoginPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SignupPage />
            </Route>
            <Route exact path="/posts">
                <FeedPostsPage />
            </Route>
            <Route exact path="/posts/:id">
                <DetailsPostPage />
            </Route>
            <Route exact path='/criar_post'>
                <CreateComment/>
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    )
}
export default Router