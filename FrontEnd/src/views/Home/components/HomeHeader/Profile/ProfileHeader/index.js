import React from 'react'
import ProfileHeaderCom from './ProfileHeaderCom';

export default function ProfileHeader(props) {
    const {userPostItemsIntel} = props

    return (
        <ProfileHeaderCom 
            userPostItemsIntel = {userPostItemsIntel}
        />
    )
}
