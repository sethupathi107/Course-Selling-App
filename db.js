const dns = require("node:dns");
dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sethupathi:Sethu123@course-selling-app.fgnlgem.mongodb.net/?appName=course-selling-app"
).then(() => console.log("Connected"))
.catch(err => console.log(err));
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema( {
    email: {type: String , unique : true},
    password : String,
    firstName : String,
    lastName : String,
} )

const adminSchema = new Schema( {
    email: {type: String , unique : true},
    password : String,
    firstName : String,
    lastName : String,
} )

const courseSchema = new Schema( {
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    adminId : ObjectId
} )

const purchaseSchema = new Schema( {
    courseId : ObjectId,
    userId : ObjectId,
} )

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)

module.export ={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}