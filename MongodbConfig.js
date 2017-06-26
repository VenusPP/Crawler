/*
* @Author: Administrator
* @Date:   2017-06-25 21:03:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-26 11:01:11
* Set up Mongodb database
*/
'use strict';
const mongoose = require("mongoose");
let url ="mongodb://localhost:27017/testone";
mongoose.connect(url);
mongoose.connection.on("connected",()=>{
	console.log(`node与mongodb数据库一建立完成:${url}`);
})
module.exports = mongoose;