export class PostCommentModel  {
    constructor(description,userName,userId,postId){
        this.postId = postId
        this.userId = userId
        this.commentDescription = description
        this.commentBy = userName
        this.commentWritingTime = ""
    }
}