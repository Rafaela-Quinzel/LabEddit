import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/public/Login/LoginPage'
import SignupPage from '../pages/public/Signup/SignupPage'
import DetailsPostPage from '../pages/private/DetailsPost/DetailsPostPage'
import FeedPostsPage from '../pages/private/FeedPosts/FeedPostsPage'



export const Router = () => {
    <Switch>
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
        {/* <Route exact path="/criar_post">
            <LoginPage/>
        </Route> */}
    </Switch>
}