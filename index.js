const express = require("express");
const app = express();

app.use(express.json());

const { loginRouter,auth } = require("./routes/auth");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use("/login",loginRouter);
app.use("/user",auth,userRouter);
app.use("/course",auth,courseRouter);
app.use("/admin",auth,adminRouter);

app.listen(3000);