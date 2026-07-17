
const { Router } = require("express");
const courseRouter = Router();


courseRouter.post("/purchase",function(req,res){
    res.json({
        message : "purchase the course"
    })
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message: " this will return courses"
    });
})

module.exports={
    courseRouter : courseRouter
}