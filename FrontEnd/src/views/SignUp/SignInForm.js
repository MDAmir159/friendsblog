import React from 'react'
import './index.css'
import  {IoIosCheckmark , IoIosClose} from 'react-icons/io';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'


export default function SignInForm(props) {
    const {
        isSame ,
        isChanged,
        newUserDetails , 
        tempPasswordStorage,
        onChangeHandleNameHandler,
        onChangeNameHandler,
        onChangeEmailHandler,
        onChangePhoneNumberHandler,
        onChangeFirstPasswordHandler,
        onChangeConfirmPasswordHandler,
        submitNewUsersAllInfo} = props;
    return (
        <div className = "root-signup">
            <form>
                <div className = "box">
                    <div className = "box-inner">
                        <div className = "form-container">
                        
                        {/* head description */}
                        <div className = "form-title">
                            <h2>Sign Up</h2>
                        </div>

                        {/* handle  */}
                        <div className="form-group">
                            <label >Enter Handle :</label>
                            <TextField
                                type="text" 
                                className="form-control-input" 
                                id="userHandle" 
                                aria-describedby="handleHelp"
                                value = {newUserDetails.userHandleName}
                                onChange = {onChangeHandleNameHandler}
                            />
                        </div>

                        {/* name  */}
                        <div className="form-group">
                            <label >Enter Name :</label>
                            <TextField 
                                type="text" 
                                className="form-control-input" 
                                id="userName" 
                                aria-describedby="nameHelp"
                                value = {newUserDetails.userName}
                                onChange = {onChangeNameHandler}
                            />
                        </div>

                        {/* email */}
                        <div className="form-group">
                            <label >Email address :</label>
                            <TextField 
                                type="email" 
                                className="form-control-input" 
                                id="userEmail" 
                                aria-describedby="emailHelp" 
                                value = {newUserDetails.userEmailAddess}
                                onChange = {onChangeEmailHandler}
                            />
                        </div>
                        
                        {/* phone nummber  */}
                        <div className="form-group">
                            <label >Enter Phone Number :</label>
                            <TextField 
                                type="text" 
                                className="form-control-input" 
                                id="userPhoneNumber" 
                                aria-describedby="phoneNumberHelp" 
                                value = {newUserDetails.userPhoneNumber}
                                onChange = {onChangePhoneNumberHandler}
                            />
                        </div>

                        {/* password */}
                        <div className="form-group">
                            <label >Enter Password:</label>
                            <TextField
                                type="password" 
                                className="form-control-input" 
                                id="userPassword1" 
                                value = {tempPasswordStorage.password1}
                                onChange = {onChangeFirstPasswordHandler}
                            />
                        </div>

                        {/* confirm password */}
                        <div className="form-group">
                            <label >Confirm Password:</label>
                            <TextField
                                type="password" 
                                className="form-control-input" 
                                id="userPassword2" 
                                value = {tempPasswordStorage.password2}
                                onChange = {onChangeConfirmPasswordHandler}
                            />
                        </div>

                        {/* password's equal confirmation sign */}
                        {
                            (isChanged && tempPasswordStorage.password1 && tempPasswordStorage.password2) && (
                                <div className = "confirm">
                                    {   
                                        // selecting icons
                                        (isSame === true) ? (
                                            <IoIosCheckmark color = "#00f010" />
                                        ) : (
                                            <IoIosClose color = "#cc0e00" />
                                        )
                                    }
                                </div>        
                            )
                        } 
                        {/* submit / signIn button */}
                        <div className = "form-group">
                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                                onClick = {submitNewUsersAllInfo}
                            >
                            Submit
                            </button>
                        </div>
                        <div className = "form-link">
                            <Link className="link" to = "/login">Already have an account?</Link>
                        </div>

                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
    
}

