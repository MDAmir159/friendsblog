import React from 'react'
import PostCommentView from '../PostCommentView'

export default function PostComment() {

    const intel = [
        "hey",
        "hello",
        "hola"
    ]

    return(
        <div>
            {
                intel.map((item) => <PostCommentView value = {item} />)
            }
        </div>
    )
}
