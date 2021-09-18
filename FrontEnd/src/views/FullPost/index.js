import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../urls/url'
import { myFormattedTime } from '../../functions/constFunctions';
import { PostCommentModel } from '../../model/PostCommentModel';
import PostComment from './PostComments';
import FullPostView from './FullPostView';
import {useSelector, useDispatch} from 'react-redux';

export default function FullPost() {
    let location = useLocation();

    const login_details = useSelector(state => state.loginStatusReducer)

    const [postDetails, setPostDetails] = React.useState(location.state.data);
    const [tempComment, setTempCommnet] = React.useState(new PostCommentModel("",login_details.authorisedUser.userName, login_details.authorisedUser.userId,postDetails.postId));
    const [commentsOnPost, setCommentsOnPost] = React.useState([])
    const [totalComments, setTotalComments] = React.useState();
    const [isAllSet, setIsAllSet] = React.useState(false)
    /////////////////////////////////////////////////////////////

    React.useEffect(() => {
        fetchCommentsOnPost();
    }, [isAllSet])

    const submitComment = () => {
        axios.post(URL.SUBMIT_COMMENT_URL , {tempComment})
            .then((res) =>{
                console.log(res);
            })
        
    }

    const fetchCommentsOnPost = () => {
        axios.post(URL.FETCH_COMMENT_URL,{postDetails})
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
        setTempCommnet({
            ...tempComment,commentDescription : ""
        })
        setIsAllSet(true);
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
