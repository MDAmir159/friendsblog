import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { BsPeopleFill } from 'react-icons/bs';
import PostComment from './components/PostComments';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { MdSend } from 'react-icons/md';
import { BsThreeDotsVertical} from 'react-icons/bs';


export default function FullPostView() {
    const useStyles = makeStyles(theme => ({
        mainPage:{
            height : '100vh',
            fontFamily : 'arial'
        },
        mainContentContainer:{
            backgroundColor : '#edffed',
            width : '115ch',
            marginLeft : '35ch',
            marginTop : '3ch',
            paddingBottom : '3ch',
            paddingTop : '1ch'
            
        },
        postHeader:{
            marginLeft : '2ch',
            paddingTop : '1.5ch',
            display :'flex',
            flexDirection : 'row',
            justifyContent : 'space-between',
            marginBottom : '2ch'
        },
        
        postHeaderPostProviderNameDate:{
            // backgroundColor : 'blue',
            maxWidth : '90%',
            fontFamily : 'arial'
            // marginTop : '2ch'
        },
        postHeaderPostProviderNameStyle:{
            fontSize : '20px'
        },
        postHeaderPostProvidingTime:{
            marginTop : '1ch'
        },
        postHeaderPostProvidingTimeStyle:{
            color : '#626b61'
        },
        postOptions:{
        //    marginLeft : '90ch',
            width : '8%',
        //    backgroundColor : 'red'
        },
        postBody:{
            // marginLeft : '2ch',
            // paddingRight : '2ch'
        },
        postBodyContainer:{
            // backgroundColor : 'yellow',
            width : '95%',
            marginLeft : '2ch',
            marginTop : '2ch',
            marginBottom : '2ch'
        },
        postTextStyle:{
            fontSize : '18px',
            fontFamily : 'arial'
        },
        postCommentDetails:{
            display : 'flex',
            flexDirection : 'row',
            marginLeft : '2ch',
            marginTop : '1ch',
            marginBottom : '1ch'
        },
        postCommentNumber:{
            marginLeft : '1ch'
        },
        addComment:{
            display : 'flex',
            flexDirection : 'row',
            marginLeft : '1.7ch',
            marginTop : '1ch'
            // backgroundColor :'red'
        },
        addCommentTextField:{
            width : '92%',
            // backgroundColor : 'blue'
        },
        addCommentStyle:{
            width : '100%'
        },
        addCommentButton:{
            marginLeft : '2ch'
        },
        addCommentButtonStyle:{

        },
        postCommentList:{
            marginLeft : '2ch'
        }
    }));

    const styles = useStyles();
    return (
        <div className = {styles.mainPage}>
            <div className = {styles.mainContentContainer}>
                    {/* post header */}
                    <div className = {styles.postHeader}>
                        {/* name and date */}
                        <div className = {styles.postHeaderPostProviderNameDate}>
                            {/* name of user */}
                            <div className = {styles.postHeaderPostProviderName}>
                                <text className = {styles.postHeaderPostProviderNameStyle}>
                                    <b>MD Amirul Islam</b>
                                </text>
                            </div>
                            {/* post time */}
                            <div className = {styles.postHeaderPostProvidingTime}>
                                <text className = {styles.postHeaderPostProvidingTimeStyle}>
                                    11:17 PM
                                </text>
                            </div>
                            
                        </div>
                        <div className = {styles.postOptions}>
                            <IconButton>
                                <BsThreeDotsVertical />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <div className = {styles.postBody}>
                        <div className = {styles.postBodyContainer}>
                            <text className = {styles.postTextStyle}>
                                    Dear Students,
                                        I have rechecked again the roll numbers that's are mentioned in the earlier post. However, only 3 persons are out of danger and their roll number is 170343, 1703088, 1703089.
                                        Roll Number 170343, 1703088, 1703089 are released from the plagiarism issue and sorry for only these 3 persons for being claimed as a plagiarized person.
                                        Thanks.
                                    BR,
                                    ZAHIR
                            </text>
                        </div>
                    </div>
                    <Divider />
                    <div className = {styles.postCommentDetails}>
                        <div className = {styles.postCommentDetailsIcon}>
                            <BsPeopleFill />
                        </div>
                        <div className = {styles.postCommentNumber}>
                            <label>
                                6 comments
                            </label>
                        </div>
                    </div>
                    <Divider />
                    <div className = {styles.addComment}>
                        <div className = {styles.addCommentTextField}>
                            <TextField
                                id="standard-full-width"
                                // style={{ margin: 8 }}
                                placeholder="Add a commnet..."
                                className = {styles.addCommentStyle}
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                            />
                        </div>
                        <div className = {styles.addCommentButton}>
                            <IconButton className={styles.addCommentButtonStyle}>
                                <MdSend />
                            </IconButton>
                        </div>
                    </div>
                    <div className = {styles.postCommentList}>
                        <PostComment />
                    </div>
            </div>
        </div>
    )
}
