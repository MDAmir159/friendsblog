import React from 'react'
import { CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Button, Divider  } from '@material-ui/core';
import {PORT} from '../../../../../../backEndPort'
import axios from 'axios'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Status/StatusView.css';


export default function ProfileHeaderCom(props) {
    
    const {authorisedUserDetails, userPostItemsIntel} = props;

    return (
        <div>
            <div className="user-info">
                {/**profile picture */} 
                <div className="profile-photo"><h1>{authorisedUserDetails.userHandle[0]}</h1></div>

                {/**profile information */}
                <div className="profiledetails">
                    <div>
                        <h3>{authorisedUserDetails.userName}</h3>
                        <p>
                            <b>Userhandle:</b> {authorisedUserDetails.userHandle}<br/>
                            <b>Email address:</b> {authorisedUserDetails.userEmailAddress}<br/>
                            <b>Phone number:</b> {authorisedUserDetails.userPhoneNumber}<br/>
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
