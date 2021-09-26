import React , {useState } from 'react'
import LogInForm from './LogInForm';
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import { URL } from '../../urls/url';
import {useSelector, useDispatch} from 'react-redux';
import {LogInAction} from '../../redux/actions';

export default function LogIn() {
console.log("Pull req checking")
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

    /// controller portion
    const loginSubmitHandler = (e) =>{
        e.preventDefault();
        if(tempUserDetails.tempUserEmail && tempUserDetails.tempUserHandleName && tempUserDetails.tempUserPassword){
            axios.post(URL.LOGIN_URL, {tempUserDetails})
            .then((res) =>{
                if(res.data.length){
                    dispatch(LogInAction(res.data[0]));
                    console.log(login_details.loggedin)
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
