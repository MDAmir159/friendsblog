import React, {useState, useEffect} from 'react'
import PostCommentView from './PostCommentView'
import axios from 'axios'
import {PORT} from '../../../backEndPort'

export default function PostComment(props) {
    const { commentsOnPost} = props

    return(
        <div>
            {
                commentsOnPost.map((item) => <PostCommentView value = {item} />)
            }
        </div>
    )
}
