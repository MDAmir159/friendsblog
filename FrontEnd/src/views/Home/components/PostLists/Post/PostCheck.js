import axios from 'axios';
import React from 'react'
import Post from '.'
import { PORT } from '../../../../../backEndPort';

export default function PostCheck(props) {
    const {
        value,
        authorisedUserDetails
    } = props;
    ////////////////////////////////////
    const [tempPostId, setTempPostId] = React.useState(value.postId);
    const [isLiked, setIsLiked] = React.useState(false);
    
    ///////////////////////////////////////////////////////
    return <Post 
                value = {value} 
                authorisedUserDetails = {authorisedUserDetails}
                isLiked = {isLiked}
                setIsLiked = {setIsLiked}
            /> 
}
