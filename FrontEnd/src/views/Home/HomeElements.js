import React from 'react'
import HomeHeader from './components/HomeHeader'
import PostBox from './components/PostBox'
import PostLists from './components/PostLists';
import '../Home/HomeElements.css'
export default function HomeElements(props) {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    const {
        newPost , 
        postItemsIntel, 
        setNewPost
    } = props;
    ////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className = "root-home">
            <div className = "home-container">
             
                <HomeHeader />
                <PostBox 
                    newPost = {newPost}
                    setNewPost = {setNewPost}
                />
                <PostLists 
                    postItemsIntel = {postItemsIntel}
                />
               
            </div>
        </div>
    )
}
