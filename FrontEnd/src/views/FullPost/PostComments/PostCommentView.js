import { styled } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function PostCommentView({value}) {
    const useStyles = makeStyles(theme => ({
        mainContainer:{
            fontFamily : 'arial'
        },
        commenterNameDateContainer:{
            display : 'flex',
            flexDirection : 'row'
        },
        commentTime:{
            marginLeft : '1ch'
        },
        commentBody:{
            marginTop : '1ch',
            marginLeft : '.5em'
        },
        commentBodyStyle:{
            size : '10ch'
        },
        commentTimeStyle:{
            color : '#939998'
        }
    }));
    // #626b61
    const styles = useStyles();   
    return (
        <div >
            <br/>
            <div className = {styles.mainContainer}>
                <div className = {styles.commenterNameDateContainer}>
                    <div className = {styles.commnerterName}>
                        <text className = {styles.commnerterNameStyle}>
                            <b>{value.commentBy}</b>
                        </text>
                    </div>
                    <div className = {styles.commentTime}>
                        <text className = {styles.commentTimeStyle}>
                            {value.commentWritingTime}
                        </text>
                    </div>
                </div>
                <div className = {styles.commentBody}>
                    <text className = {styles.commentBodyStyle}>
                        {value.commentDescription}
                    </text>
                </div>
            </div>
        </div>
    )
}
