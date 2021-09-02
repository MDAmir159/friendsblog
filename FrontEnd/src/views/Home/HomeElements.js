import React from 'react'
import HomeHeader from './components/HomeHeader'
import PostBox from './components/PostBox'
import PostLists from './components/PostLists';
import '../Home/HomeElements.css'
export default function HomeElements(props) {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const {
        newPost , 
        authorisedUserDetails, 
        setAuthorisedUserDetails, 
        postItemsIntel, 
        setNewPost
    } = props;
    ////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className = "root-home">
            <div className = "home-container">
             
                <HomeHeader
                    authorisedUserDetails = {authorisedUserDetails}
                    setAuthorisedUserDetails = {setAuthorisedUserDetails}
                />
                <PostBox 
                    newPost = {newPost}
                    authorisedUserDetails = {authorisedUserDetails}
                    setNewPost = {setNewPost}
                />
                <PostLists 
                    authorisedUserDetails = {authorisedUserDetails}
                    postItemsIntel = {postItemsIntel}
                />
               
            </div>
        </div>
    )
}
