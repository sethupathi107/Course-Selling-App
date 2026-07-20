const express = require("express");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const loginRouter = express.Router();

let users = [];

dotenv.config()

loginRouter.post("/", (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId:req.body.username,
    }
    const token = jwt.sign(data, jwtSecretKey);
    users=[...users,{username:req.body.username,password:req.body.password}]
    res.send(token);
});



const auth =(req, res,next) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        next();

    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
};

module.exports={
    loginRouter:loginRouter,
    auth
}