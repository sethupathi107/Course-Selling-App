const { Router } = require("express")
const adminRouter = Router();
const {catchError} = require("../utils/catchError")


const { adminModel } = require("../db");


adminRouter.post("/signup",function(req,res){
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message : "signin endpoint"
    })
})

adminRouter.post("/course",function(req,res){
    res.json({
        message : "courses the user enrolled"
    })
})

adminRouter.put("/course",function(req,res){
    res.json({
        message : "courses the user enrolled"
    })
})
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message : "courses the user enrolled"
    })
})


module.exports ={
    adminRouter : adminRouter
}