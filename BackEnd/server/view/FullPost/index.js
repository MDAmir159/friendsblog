const express = require('express');
const router = express.Router();

const db = require('../../config/index');

router.post('/postComment' , (req , res) =>{
    const postId = req.body.tempComment.postId;
    const userId = req.body.tempComment.userId;
    const commentDescription = req.body.tempComment.commentDescription;
    const commentWritingTime = req.body.tempComment.commentWritingTime || Math.floor(Date.now()/1000) ;
    const commentBy = req.body.tempComment.commentBy || "asdasd";
    const sqlInstert = "INSERT INTO comments (postId, userId, commentDescription, commentBy, commentWritingTime) VALUES (?,?,?,?,?)";
    db.query(sqlInstert , [postId, userId, commentDescription, commentBy, commentWritingTime] , (error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
            db.query(`Update posts set comments_number = comments_number + 1 where postId = '${postId}'`);

        }
    })
})

{/**fetching comments from database */}
router.post('/fetchComments',(req,res) =>{
    const postId = req.body.postDetails.postId;
    db.query(`SELECT x.countt, commentId, postId, userId, commentDescription, commentBy, commentWritingTime FROM comments, (SELECT COUNT(postId) as countt FROM comments WHERE postId = '${postId}') as x WHERE postId = '${postId}'`, (error,result) =>{
            if(error){
                console.log(error);
            } else {
                res.send(result);
            }
        })
})

//check if user liked the post before
router.post('/checkLiked',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    db.query(`SELECT * FROM relation_user_post WHERE postId = '${postId}' AND userId = '${userId}'`, function(error,result){
            if(error){
                console.log(error);
            } else {
                res.send(result);
            }
        }) 
})

//like the post
router.post('/likePost',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    db.query(`INSERT INTO relation_user_post (userId, postId) VALUES (?,?)`, [userId, postId], (error,result) =>{
            if(error){
                console.log(error);
            } else {
                res.send(result);
                db.query(`Update posts set likes_number = likes_number + 1 where postId = '${postId}'`);
            }
        }) 
})

//unlike the post
router.post('/unlikePost',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    db.query(`DELETE FROM relation_user_post WHERE postId = '${postId}' AND userId = '${userId}'`, (error,result) =>{
            if(error){
                console.log(error);
            } else {
                res.send(result);
                db.query(`Update posts set likes_number = likes_number - 1 where postId = '${postId}'`);
            }
        }) 
})

module.exports = router;