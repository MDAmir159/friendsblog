import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CgProfile } from "react-icons/cg";
import { Button  } from '@material-ui/core';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import './HomeHeaderElements.css'

export default function HomeHeaderElements(props) {
    const {
        authorisedUserDetails , 
        onClickProfileIconHandler,
        onClickLogOutHandler
    } = props;

    return (
        <div className = "root-home-header">
            {/* logged in as portion */}
            <div className = "header_title">
                <p className = "logger_name">
                    <b>{authorisedUserDetails.userName}</b>
                </p>
            </div>

            <div className = "settings">
                <div className = "settings_icon">
                    <Button onClick = {onClickProfileIconHandler} >
                        <CgProfile className="icons" size = "35" color = "#ffffff" />
                    </Button>
                </div>
                <div className = "logout_icon">
                    <Button onClick = {onClickLogOutHandler} >
                        <RiLogoutCircleRLine className="icons" size = "35" color = "#ffffff" />
                    </Button>
                </div>
                
            </div>
        </div>
    )
}
