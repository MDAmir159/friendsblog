import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {PORT} from '../../backEndPort'
import { myFormattedTime } from '../../functions/constFunctions';
import { PostCommentModel } from '../../model/PostCommentModel';
import PostComment from './PostComments';
import FullPostView from './FullPostView'

export default function FullPost() {
    let location = useLocation();
    const [postDetails, setPostDetails] = React.useState(location.state.data);
    const [authorisedUserDetails, setAuthorisedUserDetails] = React.useState(location.state.userData);
    const [tempComment, setTempCommnet] = React.useState(new PostCommentModel("",authorisedUserDetails.userName,authorisedUserDetails.userId,postDetails.postId));
    const [commentsOnPost, setCommentsOnPost] = React.useState([])
    const [totalComments, setTotalComments] = React.useState();
    const [isAllSet, setIsAllSet] = React.useState(false)
    /////////////////////////////////////////////////////////////

    React.useEffect(() => {
        fetchCommentsOnPost();
        
    }, [isAllSet])

    const submitComment = () => {
        axios.post(`http://localhost:${PORT}/post/postComment` , {tempComment})
            .then((res) =>{
                console.log(res);
            })
        setTempCommnet({
            ...tempComment,commentDescription : ""
        })
    }

    const fetchCommentsOnPost = () => {
        axios.post(`http://localhost:${PORT}/post/fetchComments`,{postDetails})
        .then((res) =>{
            if(res.data.length){
                setCommentsOnPost(res.data)
                setTotalComments(res.data[0].countt)
            } else {
                console.log('data not found')
            }
        })
    }


   const onChangeCommentHandler = (e) =>{
       setTempCommnet({
           ...tempComment,commentDescription : e.target.value
       })
       
   }

   const onSubmitCommentHandler = (e) =>{
       e.preventDefault();
       console.log(Math.floor(Date.now()/1000));
        setTempCommnet({
            ...tempComment,commentWritingTime : myFormattedTime()
        })
        submitComment()
        fetchCommentsOnPost()
        setIsAllSet(true);
        setTempCommnet({
            ...tempComment,commentDescription : ""
        })
   }

    /////////////////////////////////////////////////////////////
    return <FullPostView 
                postDetails = {postDetails}
                commentsOnPost = {commentsOnPost}
                totalComments = {totalComments}
                onChangeCommentHandler = {onChangeCommentHandler}
                onSubmitCommentHandler = {onSubmitCommentHandler}
            />
}
