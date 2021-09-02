import { styled } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function PostCommentView() {
    const useStyles = makeStyles(theme => ({
        mainContainer:{
            fontFamily : 'arial'
        },
        commenterNameDateContainer:{
            display : 'flex',
            flexDirection : 'row'
        },
        commnerterName:{

        },
        commentTime:{
            marginLeft : '1ch'
        },
        commentBody:{
            marginTop : '1ch'
        },
        commentTimeStyle:{
            color : '#626b61'
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
                        <text>
                            <b>043_ Fazle Rabbi</b>
                        </text>
                    </div>
                    <div className = {styles.commentTime}>
                        <text className = {styles.commentTimeStyle}>
                            Dec 4, 2020
                        </text>
                    </div>
                </div>
                <div className = {styles.commentBody}>
                    <text>
                        Thank U so much sir............
                    </text>
                </div>
            </div>
        </div>
    )
}
