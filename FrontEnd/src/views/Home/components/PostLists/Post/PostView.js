import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { IoEllipsisVertical } from "react-icons/io5";
import { AiTwotoneLike , AiOutlineLike } from "react-icons/ai";
import {FaCommentDots, FaRegShareSquare} from "react-icons/fa";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './PostView.css'
import {useSelector, useDispatch} from 'react-redux';

export default function PostView(props) {
    ///// recieving props
    const {
        item ,
        open,
        anchorEl,
        noOfLikes,
        isLiked,
        comments_number,
        onClickLikeButtonHandler,
        onClickCommentButtonHandler,
        onClickShareButtonHandler,
        handleOptionSelectionOpener ,
        selectedOptionHandler , 
        handleClose
    } = props;

    const login_details = useSelector(state => state.loginStatusReducer)

    ///styling constants
    const useStyles = makeStyles((theme) => ({
        
        likeCommentShareButtonsContainer:{
            display : 'flex',
            flexDirection : 'row',
            marginBottom : '1ch',
            minHeight : '4ch',
            marginTop : '1ch',
            // borderRadius : '10ch'
        },
        likeButtonContainer:{
            display : 'flex',
            minHeight : '100%',
            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'red',
            minWidth : '33%',
            borderTopLeftRadius : '10ch',
            borderBottomLeftRadius : '10ch',
        },
        commentButtonContainer:{
            display : 'flex',
            minHeight : '100%',

            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'green',
            minWidth : '33%',
            marginLeft : '.5ch'
        },
        shareButtonContainer:{
            display : 'flex',
            minHeight : '100%',
            alignItems : 'center',
            justifyContent :'center',
            // backgroundColor : 'blue',
            minWidth : '34%',
            borderTopRightRadius : '10ch',
            borderBottomRightRadius : '10ch',
            marginLeft : '.5ch'
        },
        likeButtonStyle:{
            width : '100%',
            minHeight : '100%',
            borderTopLeftRadius : '10ch',
            borderBottomLeftRadius : '10ch',
            backgroundColor : '#bacfcb',
            border : 'none'
        },
        commentButtonStyle:{
            width : '100%',
            minHeight : '100%',
            backgroundColor : '#bacfcb',
            border : 'none'
        },
        shareButtonStyle:{
            width : '100%',
            minHeight : '100%',
            borderTopRightRadius : '10ch',
            borderBottomRightRadius : '10ch',
            backgroundColor : '#bacfcb',
            border : 'none'
        },

        
        


    }));
    const styles = useStyles();
    const likes = 20;
    const comments = 19;
    const ITEM_HEIGHT = 40;
    const options = [
        'Edit',
        'Delete'
    ];


    return (
            <div className = "root-postview">
                {/* container */}
                <div className = "container">
                    {/* header portion */}
                    <div className = "header_details">
                        {/* user Avatar */}
                        <div className = "user_avatar">
                                {item.postUserName.charAt(0)}
                        </div>
                        {/* name and time */}
                        <div className = "post_details">
                            <label className = "post_user_name">
                                <b>{item.postUserName}</b>
                            </label>
                            <label className = "post_time">
                                {item.postInsertedTime}
                            </label>
                        </div>
                        {/* option icon */}
                        <div>
                            {
                                (item.userId === login_details.authorisedUser.userId) ? (
                                    <div className = "post_options">
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            color="primary"
                                            onClick = {handleOptionSelectionOpener}
                                        >
                                            <IoEllipsisVertical size = "18"/>
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '18ch',
                                                },
                                            }}
                                        >
                                            {options.map((option) => (
                                            <MenuItem key={option} onClick={selectedOptionHandler}>
                                                {option}
                                            </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                ): ""
                            }
                        </div>
                        
                    </div>
                    
                    {/* post text */}
                    <div className = "post_text">
                        <p className = "post_text_p"> {item.postDescription} </p>
                    </div>
                    
                    <br/>
                    <div className = "totalLikesComments">
                        <div className = "totalLikes">
                             <label>{noOfLikes} {(noOfLikes < 2) ? "Like" : "Likes"}</label>
                        </div>
                        <div className = "totalComments">
                            <label>{comments_number} comments</label>
                        </div>
                    </div>
                    <Divider style = {{
                        background: 'black'
                    }} />
                    <div className = {styles.likeCommentShareButtonsContainer}>
                        <div className = {styles.likeButtonContainer}>
                            <button
                                className = {styles.likeButtonStyle}
                                onClick = {onClickLikeButtonHandler}
                            >
                                {
                                    isLiked ? <AiTwotoneLike size = "22" /> : <AiOutlineLike size = "18" />
                                } 
                            </button>
                        </div>
                        <div className = {styles.commentButtonContainer}>
                            <button 
                                className = {styles.commentButtonStyle}
                                onClick = {onClickCommentButtonHandler}
                            >
                                <FaCommentDots size = "18"/>
                            </button>
                        </div>
                        <div className = {styles.shareButtonContainer}>
                            <Button
                                className = {styles.shareButtonStyle}
                                onClick = {onClickShareButtonHandler}
                            >
                                <FaRegShareSquare size = "18" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}