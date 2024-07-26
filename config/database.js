// const mongoose = require("mongoose");
// module.exports.connect= async()=>{
//     try {
//         await mongoose.connect("mongodb://localhost:27017/danhquang_test2");
//         console.log("thanh cong")
//     } catch (error) {
//         console.log("that bai")
//     }
// }

const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Error!");
  }
}