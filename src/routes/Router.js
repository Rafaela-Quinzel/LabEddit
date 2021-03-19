import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/public/Login/LoginPage'
import SignupPage from '../pages/public/Signup/SignupPage'
import DetailsPostPage from '../pages/private/DetailsPost/DetailsPostPage'
import FeedPostsPage from '../pages/private/FeedPosts/FeedPostsPage'



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
        </Switch>
    )
}
export default Router