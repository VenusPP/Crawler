/*
* @Author: Administrator
* @Date:   2017-06-25 23:48:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-26 11:01:25
* Control Mongodb add or delate or find or update 
*/
'use strict';
const mongoose =require("./MongodbConfig.js");
let Schema =mongoose.Schema;
let ProductSchema = new Schema({
	"title":String,
	"price":String,
	"cat":String
});
let ProductEntity = mongoose.model("products",ProductSchema);
module.exports = {
	add:(productinfo,cb)=>{
		let p = new ProductEntity(productinfo);
		p.save((err,result)=>{
			cb(err,result);
		})
	}
}
// module.exports = ProductModel;