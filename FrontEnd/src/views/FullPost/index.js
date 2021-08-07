import React from 'react'
import { useLocation } from 'react-router-dom'
import { myFormattedTime } from '../../functions/constFunctions';
import { PostCommentModel } from '../../model/PostCommentModel';
import PostComment from './components/PostComments';
import FullPostView from './FullPostView'

export default function FullPost() {
    let location = useLocation();
    const [postDetails, setPostDetails] = React.useState(location.state.data);
    const [tempComment, setTempCommnet] = React.useState(new PostCommentModel("",postDetails.postUserName,postDetails.userId,postDetails.postId));
    const [isAllSet, setIsAllSet] = React.useState(false)
    // console.log(location.state.data);
    // INSERT INTO `comments` (`commentId`, `postId`, `userId`, `commentDescription`, `commentWritingTime`, `commentVote`) VALUES (NULL, '26', '10020', 'menendex has the pmcs', '12:33 PM', '3');
   /////////////////////////////////////////////////////////////

    React.useEffect(() => {
        if(tempComment.commentWritingTime !== ""){
            console.log(tempComment);
            console.log("Let's save to database");
        }
    }, [isAllSet])


   const onChangeCommentHandler = (e) =>{
       setTempCommnet({
           ...tempComment,commentDescription : e.target.value
       })
       
   }

   const onSubmitCommentHandler = (e) =>{
       e.preventDefault();
        setTempCommnet({
            ...tempComment,commentWritingTime : myFormattedTime()
        })
        setIsAllSet(true);
   }



    /////////////////////////////////////////////////////////////
    return <FullPostView 
                postDetails = {postDetails}
                onChangeCommentHandler = {onChangeCommentHandler}
                onSubmitCommentHandler = {onSubmitCommentHandler}
            />
}
