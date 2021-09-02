const express = require('express');
const router = express.Router();
const db = require('../../config/index');

router.post('/signup' , (req , res) =>{
    const userHandleName = req.body.newUserDetails.userHandleName;
    const userPassword = req.body.newUserDetails.userPassword; 
    const userName = req.body.newUserDetails.userName;
    const userEmailAddress = req.body.newUserDetails.userEmailAddress;
    const userPhoneNumber = req.body.newUserDetails.userPhoneNumber;
    const userInsertedTime = req.body.newUserDetails.userInsertedTime;
    const userUpdatedTime = req.body.newUserDetails.userUpdatedTime;



    const sqlInstert = "INSERT INTO users (userHandle, userPassword, userName, userPhoneNumber, userInsertedTime, userUpdatedTime , userEmailAddress) VALUES (?,?,?,?,?,?,?)";
    const sqlArray = [userHandleName,userPassword,userName,userPhoneNumber,userInsertedTime,userUpdatedTime,userEmailAddress];
    if(userHandleName){
        try{
            db.query(sqlInstert ,sqlArray , (error,result)=>{
                if(error){
                    console.log(error);
                    res.status(500).json({message : "failed to sign up"});
                    
                }else{
                    console.log(result);
                    res.status(201).json({message : "element inserted"});
                }
            })
        } catch (error){
            console.log(error);
        }
        
    }
    res.send("hey")
})

module.exports = router;