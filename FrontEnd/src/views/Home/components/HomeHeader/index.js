import React from 'react'
import { useHistory } from 'react-router-dom';
import { ObjectToBeSavedInBrowser } from '../../../../model/ObjectToBeSavedInBrowser';
import Routes from '../../../../Routes';
import { getLoggedOut } from '../../../../Utility';
import HomeHeaderElements from './HomeHeaderElements'

export default function HomeHeader(props) {
    const {authorisedUserDetails, setAuthorisedUserDetails} = props;

    let history = useHistory();

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
