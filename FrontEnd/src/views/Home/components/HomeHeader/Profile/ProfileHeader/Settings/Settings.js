import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import {URL} from '../../../../../../../urls/url';
import { Button , TextField, Divider } from '@material-ui/core';
import ProfileHeader from '../../ProfileHeader';
import '../Status/StatusView.css'
import './Settings.css'

export default function Settings(props) {
    const {
        isSame ,
        isChanged,
        newUserDetails , 
        tempPasswordStorage,
        onChangeHandleNameHandler,
        onChangeNameHandler,
        onChangeEmailHandler,
        onChangePhoneNumberHandler,
        onChangeCurrentPasswordHandler,
        onChangeFirstPasswordHandler,
        onChangeConfirmPasswordHandler,
        submitUsersUpdateInfo, authorisedUserDetails} = props;
        const [userPostItemsIntel, setUserPostItemsIntel] = useState([])
    
    ///// value will come from backEnd
    //// query to find out the filtered posts ... those are posted by the user
    useEffect(() => {
        axios.post(URL.USERS_POST_URL , {authorisedUserDetails})
            .then((res) =>{
                if(res.data.length){
                    setUserPostItemsIntel(res.data)
                    // console.log(res.data)
                } else {
                    console.log('no data found')
                }
            })
    }, [])

    const useStyles = makeStyles(() => ({
        root:{
            display : 'flex',
            backgroundColor : '#edf2f2',
            flexDirection : 'column',
            borderRadius : '6px',
            border: 1,
            borderStyle: 'solid',
            marginLeft : 'auto',
            width: '100%',
            height: 'auto',
            padding: '30px',
        },
        box:{
            alignSelf: 'center',
            width : '150%',
            marginBottom: '20px',
            marginLeft: '5%'
        },
        button_div :{
            display : 'flex',
            width : '90%',
            marginTop : '1ch',
            marginLeft: '5%',
            marginRight: '5%'
        },
        button_desgin :{
            backgroundColor : '#30555A',
            width: '100%',
            paddingLeft: '70px',
            paddingRight: '70px',
        },
        tectfield_design:{
            width : '60%',

        }
    }));

    const styles = useStyles();
    const [isClicked, setIsClicked] = useState(false);

    const buttonClicked = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="root-status">
            {/**profile part */}
            <ProfileHeader authorisedUserDetails= {authorisedUserDetails} userPostItemsIntel={userPostItemsIntel} />

            {/**settings section */}
            <div className="user-setting">
            <div className = {styles.root}>
            <form>
                {/* userHandler change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Handler"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange = {onChangeHandleNameHandler}
                    />
                </div>

                {/* name change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Name"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeNameHandler}
                    />
                </div>

                {/* email address change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Email address"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeEmailHandler}
                    />
                </div>

                {/* phone number change */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change Phone"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangePhoneNumberHandler}
                    />
                </div>

                {/* confirming current password */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Current password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeCurrentPasswordHandler}
                    />
                </div>

                {/* new password input */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Change password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeFirstPasswordHandler}
                    />
                </div>

                {/* new password confirm */}
                <div className = {styles.box} >
                    <TextField
                        className = {styles.tectfield_design}
                        id="outlined-helperText"
                        label="Confirm new password"
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        onChange={onChangeConfirmPasswordHandler}
                    />
                </div>

                {/* submit button */}
                <div className = {styles.button_div}>
                    <Button
                        type = "submit"
                        className = {styles.button_desgin}
                        onClick ={submitUsersUpdateInfo}
                    >Update</Button>
                </div>
            </form>          
        </div>
            </div>
        </div>
        
    )
}
