import React from 'react'
import ProfileHeaderCom from './ProfileHeaderCom';

export default function ProfileHeader(props) {
    const {authorisedUserDetails, userPostItemsIntel} = props

    return (
        <ProfileHeaderCom 
            authorisedUserDetails = {authorisedUserDetails}
            userPostItemsIntel = {userPostItemsIntel}
        />
    )
}
