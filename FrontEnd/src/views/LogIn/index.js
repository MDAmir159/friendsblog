import React , {useState , useEffect} from 'react'
import LogInForm from './LogInForm';
import { Link, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios';
import { IoLogIn } from 'react-icons/io5';
import { PORT } from '../../backEndPort';

export default function LogIn() {

    ////////////////////////////////////////////   model portion    ////////////////////////////////////////////////////

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [tempUserDetails, setTempUserDetails] = useState({
        tempUserHandleName : "",
        tempUserEmail : "",
        tempUserPassword : ""
    })
    let history = useHistory();

    //////////////////////////////////////////// controller portion

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

    const loginSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:${PORT}/login`,{tempUserDetails})
        .then((res) =>{
            console.log(res.data.length);
            if(res.data.length){
                history.push({
                    pathname : '/home',
                    state : {data : res.data[0]}
                });
                setAuthorisedUserDetails(res.data[0]);
            } else {
                alert('No matches !!')
            }
        })
    }


    //////////////////////////////////////////     View portion
    return <LogInForm
                tempUserDetails = {tempUserDetails}
                onChangeTempUserHandleNameHandler = {onChangeTempUserHandleNameHandler}
                onChangeTempUserEmailHandler = {onChangeTempUserEmailHandler}
                onChangeTempUserPasswordHandler = {onChangeTempUserPasswordHandler}
                loginSubmitHandler = {loginSubmitHandler}
            />
}
