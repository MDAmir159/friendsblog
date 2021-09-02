import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import Settings from './views/Home/components/HomeHeader/Profile/ProfileHeader/Settings'
import Status from './views/Home/components/HomeHeader/Profile/ProfileHeader/Status'
import SignUp from './views/SignUp'
import NewPage from './NewPage'
import Profile from './views/Home/components/HomeHeader/Profile'
import FullPost from './views/FullPost'
import NotFoundPage from './views/NotFoundPage'
import { isLoggedIn } from './Utility'
import PublicRoute from './RoutingModules/PublicRoute'
import PrivateRoute from './RoutingModules/PrivateRoute'

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path = "/" component = {Home} />
                <PublicRoute exact path = "/login" component = {LogIn} />
                <PublicRoute exact path = "/signup" component = {SignUp} />
                <PrivateRoute path = "/profile" component = {Profile} />
                <PrivateRoute path = "/fullpost" component = {FullPost} />
                <PrivateRoute exact path = "*" component = {NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}
