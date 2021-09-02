import React from 'react'
import axios from 'axios'
import PostLists from '../../../../PostLists'
import {PORT} from '../../../../../../../backEndPort'
import { Divider } from '@material-ui/core';
import ProfileHeader from '../../ProfileHeader';
import './StatusView.css'

export default function StatusView(props) {

    const {authorisedUserDetails} = props;
    const [userPostItemsIntel, setUserPostItemsIntel] = React.useState([])
    
    ///// value will come from backEnd
    //// query to find out the filtered posts ... those are posted by the user
    React.useEffect(() => {
        axios.post(`http://localhost:${PORT}/profile/Status/userPosts` , {authorisedUserDetails})
            .then((res) =>{
                if(res.data.length){
                    setUserPostItemsIntel(res.data)
                    // console.log(res.data)
                } else {
                    console.log('no data found')
                }
            })
    }, [])


    return (
        <div className="root-status">
            {/**profile part */}
            <ProfileHeader authorisedUserDetails= {authorisedUserDetails} userPostItemsIntel={userPostItemsIntel} />
            {/**posts section */}
            <div className="user-post">
                <PostLists 
                    authorisedUserDetails = {authorisedUserDetails}
                    postItemsIntel = {userPostItemsIntel}
                />
            </div>
        </div>
        
    )
}