import React from 'react'
import { useLocation } from 'react-router-dom'
import ProfileView from './ProfileView'

export default function Profile() {

    let location = useLocation();
    const [authorisedUserDetails, setAuthorisedUserDetails] = React.useState(location.state.data)
    // console.log(location.state.data);

    return <ProfileView 
                authorisedUserDetails = {authorisedUserDetails}
            />
}
