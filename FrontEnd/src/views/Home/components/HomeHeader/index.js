import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ObjectToBeSavedInBrowser } from '../../../../model/ObjectToBeSavedInBrowser';
import Routes from '../../../../Routes';
import { getLoggedOut } from '../../../../Utility';
import HomeHeaderElements from './HomeHeaderElements';
import {useSelector, useDispatch} from 'react-redux';
import {LogoutAction} from '../../../../redux/actions';

export default function HomeHeader() {

    const login_details = useSelector(state => state.loginStatusReducer)
    const dispatch = useDispatch();

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(login_details.authorisedUser);

    let history = useHistory();

    console.log(login_details.authorisedUser);

    const onClickProfileIconHandler = () =>{
        history.push({
            pathname : '/profile',
            state : {data : authorisedUserDetails}
        })
    }

    const onClickLogOutHandler = () =>{
        ////////// saving user info locally as being logged in   /////////////////
        const objectToBeSaved = new ObjectToBeSavedInBrowser(false,"");
        getLoggedOut('DLGT_PROJECT2_postGivingAppRemastered',JSON.stringify(objectToBeSaved));
        dispatch(LogoutAction())
        ////////// setting new path  //////////
        history.push({
            pathname : '/login'
        })
    }

    return <HomeHeaderElements 
                authorisedUserDetails = {authorisedUserDetails}
                setAuthorisedUserDetails = {setAuthorisedUserDetails}
                onClickProfileIconHandler = {onClickProfileIconHandler}
                onClickLogOutHandler = {onClickLogOutHandler}
            />
}
