import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import HomeHeaderElements from './HomeHeaderElements';
import {useSelector, useDispatch} from 'react-redux';
import {LogoutAction} from '../../../../redux/actions';

export default function HomeHeader() {

    const login_details = useSelector(state => state.loginStatusReducer)
    const dispatch = useDispatch();


    let history = useHistory();

    console.log(login_details.authorisedUser);

    const onClickProfileIconHandler = () =>{
        history.push({
            pathname : '/profile',
        })
    }

    const onClickLogOutHandler = () =>{

        dispatch(LogoutAction())
        ////////// setting new path  //////////
        history.push({
            pathname : '/login'
        })
    }

    return <HomeHeaderElements 
                onClickProfileIconHandler = {onClickProfileIconHandler}
                onClickLogOutHandler = {onClickLogOutHandler}
            />
}
