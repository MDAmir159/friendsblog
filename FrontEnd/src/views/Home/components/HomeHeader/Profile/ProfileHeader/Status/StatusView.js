import React from 'react'
import axios from 'axios'
import PostLists from '../../../../PostLists'
import {URL} from '../../../../../../../urls/url';
import { Divider } from '@material-ui/core';
import ProfileHeader from '../../ProfileHeader';
import './StatusView.css'
import {useSelector, useDispatch} from 'react-redux';

export default function StatusView(props) {

    const [userPostItemsIntel, setUserPostItemsIntel] = React.useState([])
    const login_details = useSelector(state => state.loginStatusReducer)
    const authorisedUserDetails = login_details.authorisedUser

    
    ///// value will come from backEnd
    //// query to find out the filtered posts ... those are posted by the user
    React.useEffect(() => {
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


    return (
        <div className="root-status">
            {/**profile part */}
            <ProfileHeader userPostItemsIntel={userPostItemsIntel} />
            {/**posts section */}
            <div className="user-post">
                <PostLists 
                    postItemsIntel = {userPostItemsIntel}
                />
            </div>
        </div>
        
    )
}