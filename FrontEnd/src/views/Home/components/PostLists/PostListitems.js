import React from 'react'
import Post from './Post/index'

export default function PostListitems(props) {
    const {postItemsIntel} = props;    
    return (
        <div>
            <ul type = "none">
                {
                    postItemsIntel.map((item , index) => <Post key = {index} index = {index} value = {item} />)
                }
            </ul>
        </div>
    );
}
