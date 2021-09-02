const express = require('express');
const router = express.Router();
const db = require('../../config/index');

router.post('/login',(req,res) =>{
    const userHandleName = req.body.tempUserDetails.tempUserHandleName;
    const userEmailAddress = req.body.tempUserDetails.tempUserEmail;
    const userPassword = req.body.tempUserDetails.tempUserPassword;
    
    try {
        db.query(`SELECT * FROM users where userHandle = '${userHandleName}' and userEmailAddress = '${userEmailAddress}'
        and userPassword = '${userPassword}'`, (error,result) =>{
            if(error){
                console.log(error);
                res.status(403).json({value : "user access is denied"})
            } else {
                res.status(202).send(result);
                // console.log(result);
            }
        })    
    } catch (error) {
        console.log(error);
        res.status(500).json({value : "internal server error"});
    }
})

module.exports = router;