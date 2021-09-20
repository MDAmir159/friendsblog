const express = require('express');
const router = express.Router();
const queries = require('../../queries/postQuery');

const db = require('../../config/index');

{/**adding comments from database */}
router.post('/postComment' , (req , res) =>{
    const postId = req.body.tempComment.postId;
    const userId = req.body.tempComment.userId;
    const commentDescription = req.body.tempComment.commentDescription;
    const commentWritingTime = req.body.tempComment.commentWritingTime || Math.floor(Date.now()/1000) ;
    const commentBy = req.body.tempComment.commentBy;

    const sqlArray = [postId, userId, commentDescription, commentBy, commentWritingTime];

    try {
        if(commentDescription){
            db.query(queries.postComment_query(), sqlArray , (error,result)=>{
                if(error){
                    console.log(error);
                    res.status(500).json({value : "something wrong"});
                }else{
                    db.query(queries.updateCommentNumber_query(postId), (error, result)=>{
                        if(error){
                            console.log(error);
                            res.status(500).json({value : "something wrong"});
                        }
                    });
                }
            })
        }
    } catch(error){
        console.log(error);
        res.status(500).json({value : "something wrong"});
    }
})

{/**fetching comments from database */}
router.post('/fetchComments',(req,res) =>{
    const postId = req.body.postDetails.postId;
    try {
        db.query(queries.fetchComments_query(postId), (error,result) =>{
            if(error){
                console.log(error);
                res.status(500).json({value : "something wrong"});
            } else {
                res.send(result);
            }
        })
    } catch(error){
        console.log(error);
        res.status(500).json({value : "something wrong"});
    }
})

//check if user liked the post before
router.post('/checkLiked',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    try{
        db.query(queries.checkLiked(postId, userId), (error,result) => {
            if(error){
                console.log(error);
                res.status(500).json({value : "something wrong"});
            } else {
                res.send(result);
            }
        })
    } catch(error){
        console.log(error);
        res.status(500).json({value : "something wrong"});
    }
})

//like the post
router.post('/likePost',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    try{
        db.query(queries.likePost(), [postId, userId], (error,result) =>{
            if(error){
                console.log(error);
                res.status(500).json({value : "something wrong"});
            } else {
                res.send(result);

                //increase like number
                db.query(queries.IncLikeNumber_query(postId), (error, result)=>{
                    if(error){
                        console.log(error);
                        res.status(500).json({value : "something wrong"});
                    }
                });
            }
        }) 
    } catch(error){
        console.log(error);
        res.status(500).json({value : "something wrong"});
    }
})

//unlike the post
router.post('/unlikePost',(req,res) =>{
    const postId = req.body.item.postId;
    const userId = req.body.authorisedUserDetails.userId;
    try{
        db.query(queries.unlikePost(postId, userId), (error,result) =>{
            if(error){
                console.log(error);
                res.status(500).json({value : "something wrong"});
            } else {
                res.send(result);

                //decrease like number
                db.query(queries.DecLikeNumebr_query(postId), (error, result)=>{
                    if(error){
                        console.log(error);
                        res.status(500).json({value : "something wrong"});
                    }
                });
            }
        }) 
    }  catch(error){
        console.log(error);
        res.status(500).json({value : "something wrong"});
    }
})

module.exports = router;