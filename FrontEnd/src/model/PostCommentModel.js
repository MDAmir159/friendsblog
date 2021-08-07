export class PostCommentModel  {
    constructor(description,userName,userId,postId){
        this.postId = postId
        this.userId = userId
        this.commentDescription = description
        this.commentWritingTime = ""
        this.commentVote = 0
    }
}