import React, {useState} from 'react'
import ProfileView from './ProfileView'
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

export default function Profile() {
    let location = useLocation();
    console.log(location.pathname);
    return (
        <ProfileView />
     )
}
