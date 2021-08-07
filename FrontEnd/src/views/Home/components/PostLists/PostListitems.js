import React from 'react'
import Post from './Post/index'

export default function PostListitems(props) {
    const {
        authorisedUserDetails,
        postItemsIntel
    } = props;    
    return (
        <div>
            <ul type = "none">
                {
                    postItemsIntel.map((item , index) => <Post key = {index} index = {index} value = {item} authorisedUserDetails = {authorisedUserDetails}/>)
                }
            </ul>
        </div>
    );
}
