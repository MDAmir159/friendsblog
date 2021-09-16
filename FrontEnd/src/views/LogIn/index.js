import React , {useState } from 'react'
import LogInForm from './LogInForm';
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import { URL } from '../../urls/url';
import { ObjectToBeSavedInBrowser } from '../../model/ObjectToBeSavedInBrowser';
import { getLoggedIn } from '../../Utility';
import {useSelector, useDispatch} from 'react-redux';
import {LogInAction} from '../../redux/actions';

export default function LogIn() {
    ////////////////////////////////////////////   model portion    ////////////////////////////////////////////////////
    const login_details = useSelector(state => state.loginStatusReducer)

    const dispatch = useDispatch();

    const [tempUserDetails, setTempUserDetails] = useState({
        tempUserHandleName : "",
        tempUserEmail : "",
        tempUserPassword : ""
    })
    let history = useHistory();

    const onChangeTempUserHandleNameHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserHandleName : e.target.value
        })
    }

    // getting user email
    const onChangeTempUserEmailHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserEmail : e.target.value
        })
    }

    // getting user password
    const onChangeTempUserPasswordHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserPassword : e.target.value
        })
    }

    const saveToBrowserStorage = value =>{
        const objectToBeSaved = new ObjectToBeSavedInBrowser(true,value);
        getLoggedIn('DLGT_PROJECT2_postGivingAppRemastered',JSON.stringify(objectToBeSaved));
    }

    /// controller portion
    const loginSubmitHandler = (e) =>{
        e.preventDefault();
        if(tempUserDetails.tempUserEmail && tempUserDetails.tempUserHandleName && tempUserDetails.tempUserPassword){
            axios.post(URL.LOGIN_URL, {tempUserDetails})
            .then((res) =>{
                saveToBrowserStorage(res.data[0]);
                if(res.data.length){
                    dispatch(LogInAction(res.data[0]));
                    history.push({
                        pathname : '/',
                    });
                } else {
                    alert('No matches !!')
                }
            })
        } else {
            alert('What are you doing??')
        }
    }


    /// View portion
    return <LogInForm
                tempUserDetails = {tempUserDetails}
                onChangeTempUserHandleNameHandler = {onChangeTempUserHandleNameHandler}
                onChangeTempUserEmailHandler = {onChangeTempUserEmailHandler}
                onChangeTempUserPasswordHandler = {onChangeTempUserPasswordHandler}
                loginSubmitHandler = {loginSubmitHandler}
            />
}
