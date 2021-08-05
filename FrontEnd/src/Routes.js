import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import LogIn from './views/LogIn'
import Settings from './views/Settings'
import SignUp from './views/SignUp'
import NewPage from './NewPage'
import Profile from './views/Home/components/HomeHeader/Profile'
import FullPost from './views/FullPost'

export default function Routes() {
    return (
       <Switch>
           <Route exact path = '/' component = {LogIn} />
           <Route path = '/signup' component = {SignUp} />
           <Route path = '/home' component = {Home} />
           <Route path = '/profile' component = {Profile} />
           <Route path = '/settings' component = {Settings} />
           <Route path = '/fullPost' component = {FullPost} />
       </Switch>
    )
}
