const mongoose = require("mongoose");
module.exports.connect= async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/danhquang_test2");
        console.log("thanh cong")
    } catch (error) {
        console.log("that bai")
    }
}