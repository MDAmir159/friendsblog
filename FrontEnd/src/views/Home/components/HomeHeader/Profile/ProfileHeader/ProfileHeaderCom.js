import React from 'react'
import { CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Button, Divider  } from '@material-ui/core';
import {PORT} from '../../../../../../backEndPort'
import axios from 'axios'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Status/StatusView.css';
import {useSelector, useDispatch} from 'react-redux';

export default function ProfileHeaderCom(props) {
    const login_details = useSelector(state => state.loginStatusReducer)    
    const {userPostItemsIntel} = props;

    return (
        <div>
            <div className="user-info">
                {/**profile picture */} 
                <div className="profile-photo"><h1>{login_details.authorisedUser.userHandle[0]}</h1></div>

                {/**profile information */}
                <div className="profiledetails">
                    <div>
                        <h3>{login_details.authorisedUser.userName}</h3>
                        <p>
                            <b>Userhandle:</b> {login_details.authorisedUser.userHandle}<br/>
                            <b>Email address:</b> {login_details.authorisedUser.userEmailAddress}<br/>
                            <b>Phone number:</b> {login_details.authorisedUser.userPhoneNumber}<br/>
                        </p>
                    </div>

                    <Divider style = {{
                        background: 'black',
                        height: '1.5px',
                        marginBottom: '20px'
                    }} />

                    <div>
                        <p>
                            <b>Total posts:</b> {userPostItemsIntel.length}<br/>
                            <b>Total likes:</b> 9<br/>
                            <b>Total comments:</b> 5<br/>
                        </p>
                    </div>


                </div>
            </div>
            
        </div>
    )
}
