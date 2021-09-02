const express = require('express')
const router = express.Router();

const db = require('../../../config/index');

{/**getting logged in user's posts */}
router.post('/userPosts',(req,res) =>{
    const userId = req.body.authorisedUserDetails.userId;
    db.query(`SELECT * FROM posts WHERE userId = '${userId}'`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
        }
    })
})

module.exports = router;