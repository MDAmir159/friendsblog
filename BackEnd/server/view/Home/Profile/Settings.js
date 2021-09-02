const express = require('express')
const router = express.Router();

const db = require('../../../config/index');

{/**getting user info */}
router.post("/userInfo",(req,res) =>{
    const userId = req.body.updateUserDetails.userId;
    db.query(`SELECT * FROM users WHERE userId = '${userId}'`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
        }
        // console.log('The data from beer table are: \n', rows)
    })
})

{/**updating user info  */}
router.post("/updateUserInfo",(req,res) =>{
    const userId = req.body.updateUserDetails.userId;
    const userHandleName = req.body.updateUserDetails.userHandleName;
    const userName = req.body.updateUserDetails.userName;
    const userEmailAddress = req.body.updateUserDetails.userEmailAddress;
    const userPhoneNumber = req.body.updateUserDetails.userPhoneNumber;
    const userPassword = req.body.updateUserDetails.userPassword;
    const userUpdatedTime = req.body.updateUserDetails.userUpdatedTime;
    db.query(`UPDATE users SET userHandle='${userHandleName}', userPassword='${userPassword}', userName='${userName}', userPhoneNumber='${userPhoneNumber}', userUpdatedTime='${userUpdatedTime}', userEmailAddress='${userEmailAddress}' WHERE userId = '${userId}'`,(error,rows) =>{
        if(error){
            console.log(error);
        } else {
            res.send(rows)
        }
        // console.log('The data from beer table are: \n', rows)
    })
})

module.exports = router