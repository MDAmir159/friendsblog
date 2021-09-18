import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { BsPeopleFill } from 'react-icons/bs';
import PostComment from './PostComments';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { BiSend } from 'react-icons/bi';
import { BsThreeDotsVertical} from 'react-icons/bs';
import './index.css'

export default function FullPostView(props) {

    const {
        postDetails,
        commentsOnPost,
        totalComments,
        onChangeCommentHandler,
        onSubmitCommentHandler
    } = props;

    return (
        <div className = "mainPage">
            <div className = "mainContentContainer">
                    {/* post header */}
                    <div className = "postHeader">
                        {/* name and date */}
                        <div className = "postHeaderPostProviderNameDate">
                            {/* name of user */}
                            <div className = "postHeaderPostProviderName">
                                <text className = "postHeaderPostProviderNameStyle">
                                    <b>{postDetails.postUserName}</b>
                                </text>
                            </div>
                            {/* post time */}
                            <div className = "postHeaderPostProvidingTime">
                                <text className = "postHeaderPostProvidingTimeStyle">
                                    {postDetails.postInsertedTime}
                                </text>
                            </div>
                            
                        </div>
                        <div className = "postOptions">
                            <IconButton>
                                <BsThreeDotsVertical />
                            </IconButton>
                        </div>
                    </div>
                    <Divider style={{ background: 'black' , width : '90%' , marginLeft : '5%' }} />
                    <div className = "postBody">
                        <div className = "postBodyContainer">
                            <text className = "postTextStyle">
                                {postDetails.postDescription}
                            </text>
                        </div>
                    </div>
                    <Divider />
                    <div className = "postCommentDetails">
                        <div className = "postCommentDetailsIcon">
                            <BsPeopleFill className = "postCommentDetailsIconStyle"/>
                        </div>
                        <div className = "postCommentNumber">
                            {
                                totalComments ?
                                <label>{totalComments} {(totalComments < 2) ? "comment" : "comments"}</label> :
                                <label>No comments</label>
                            }
                        </div>
                    </div>
                    <Divider  />
                    <div className = "addComment">
                        <div className = "addCommentTextField">
                            <TextField
                                id="standard-full-width"
                                // style={{ margin: 8 }}
                                placeholder="Add a commnet..."
                                className = "addCommentStyle"
                                onChange = {onChangeCommentHandler}
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                            />
                        </div>
                        <div className = "addCommentButton">
                            <IconButton
                                className = "addCommentButtonStyle"
                                onClick = {onSubmitCommentHandler}
                            >
                                <BiSend color = "#ffffff" size="20"/>
                            </IconButton>
                        </div>
                    </div>
                    {/* <Divider style={{ background: 'black' , width : '90%' , marginLeft : '5%' }} /> */}
                    <div className = "postCommentList">
                        <PostComment commentsOnPost={commentsOnPost}/>
                    </div>
            </div>
        </div>
    )
}
