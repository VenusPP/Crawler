/**
 * Created by Administrator on 2017/6/25.
 */
 "use strict"
const Crawler = require("./crawler");
const ProductModel = require("./ProductModel.js");
let url = "https://www.mafengwo.cn/sales/0-10065-M10030P%E6%B5%B7%E5%8D%97-0-0-0-0-0.html";
Crawler(url,(error,result)=>{
	console.log(result);
});

