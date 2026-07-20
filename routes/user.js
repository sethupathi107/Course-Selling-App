
const { Router } = require("express");
const userRouter = Router();
const {catchError} = require("../utils/catchError")

function signin (req,res,next){
    res.json({
        message : "signup endpoint"
    })
}

userRouter.post("/signup", catchError(signin))

userRouter.post("/signin",function(req,res){
    res.json({
        message : "signin endpoint"
    })
})

userRouter.get("/purchases",function(req,res){
    res.json({
        message : "courses the user enrolled"
    })
})

module.exports = {
    userRouter : userRouter
}