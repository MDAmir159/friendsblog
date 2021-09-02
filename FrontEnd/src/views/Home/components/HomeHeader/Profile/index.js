import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { getloggedInUsersInfo } from '../../../../../Utility';
import ProfileView from './ProfileView'

export default function Profile() {
    let location = useLocation();
    let initialData = getloggedInUsersInfo();

    console.log(initialData);
    console.log(getloggedInUsersInfo());

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(initialData);
    return (
        <ProfileView 
            authorisedUserDetails = {authorisedUserDetails}
            setAuthorisedUserDetails = {setAuthorisedUserDetails}
        />
     )
}
