const Mongoose = require('Mongoose')
// const { model } = require('mongoose')

// Mongoose.connect("mongodb://47.103.11.183:27017/todoApp",{useNewUrlParser:true,useUnifiedTopology:true}).then(res => {
//     console.log("数据库链接成功")
// }).catch(err => {
//     console.log("数据库链接成功")
// })
// Mongoose.connect("mongodb://localhost:27017/todoApp")

Mongoose.connect("mongodb://localhost:27017/todoApp",{useNewUrlParser:true,useUnifiedTopology:true}).then(res => {
    console.log("数据库链接成功")
}).catch(err => {
    console.log("数据库链接成功")
})

module.exports = Mongoose