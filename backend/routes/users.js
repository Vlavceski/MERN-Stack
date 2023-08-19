const express=require('express')

//controller
const {loginUser,signupUser} =require('../controllers/userController')

const router=express.Router();


//login
router.post('/login',loginUser)

//registration
router.post('/signup',signupUser)



module.exports=router;