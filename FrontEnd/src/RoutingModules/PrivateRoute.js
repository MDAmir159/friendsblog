import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';


export default function PrivateRoute({component : Component , ...rest}) {
    const login_details = useSelector(state => state.loginStatusReducer)
    return(
        <Route {...rest} render = {(props) =>(
            login_details.loggedin ? 
                <Component props = {props} />
                 : <Redirect to = '/login' />
            )
        }
        />
    );
}
