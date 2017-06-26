/**
 * Created by Administrator on 2017/6/25.
 * Content About Crawler
 */
"use strict"
const superagent = require("superagent");
const cheerio = require("cheerio");
const ProductModel = require("./ProductModel");
let requestHeaders ={
        "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
         "Accept-Encoding":"gzip, deflate, sdch, br",
         "Accept-Language":"zh-CN,zh;q=0.8",
         "Cache-Control":"max-age=0",
         "Connection":"keep-alive",
         "Cookie":"PHPSESSID=9laialkqdpcvtgg61s7c2um1v2; mfw_uuid=594fad54-869c-7e56-0e43-17a1d6355f10; _r=baidu; _rp=a%3A2%3A%7Bs%3A1%3A%22p%22%3Bs%3A18%3A%22www.baidu.com%2Flink%22%3Bs%3A1%3A%22t%22%3Bi%3A1498393940%3B%7D; oad_n=a%3A5%3A%7Bs%3A5%3A%22refer%22%3Bs%3A21%3A%22https%3A%2F%2Fwww.baidu.com%22%3Bs%3A2%3A%22hp%22%3Bs%3A13%3A%22www.baidu.com%22%3Bs%3A3%3A%22oid%22%3Bi%3A1026%3Bs%3A2%3A%22dm%22%3Bs%3A15%3A%22www.mafengwo.cn%22%3Bs%3A2%3A%22ft%22%3Bs%3A19%3A%222017-06-25+20%3A32%3A20%22%3B%7D; __mfwlv=1498393944; __mfwvn=1; uva=s%3A264%3A%22a%3A4%3A%7Bs%3A13%3A%22host_pre_time%22%3Bs%3A10%3A%222017-06-25%22%3Bs%3A2%3A%22lt%22%3Bi%3A1498393956%3Bs%3A10%3A%22last_refer%22%3Bs%3A137%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DXtqTMcKnLHmoW1FLr1V-aVjNwkjVUxuog13EqZI_aKRBBhulPGfWVRGmA067wXsw%26wd%3D%26eqid%3Df6e2357000107b9600000006594fad4b%22%3Bs%3A5%3A%22rhost%22%3Bs%3A13%3A%22www.baidu.com%22%3B%7D%22%3B; __mfwurd=a%3A3%3A%7Bs%3A6%3A%22f_time%22%3Bi%3A1498393956%3Bs%3A9%3A%22f_rdomain%22%3Bs%3A13%3A%22www.baidu.com%22%3Bs%3A6%3A%22f_host%22%3Bs%3A3%3A%22www%22%3B%7D; __mfwuuid=594fad54-869c-7e56-0e43-17a1d6355f10; UM_distinctid=15cdf3d5e96321-05f9806391ce0d-6b1b1279-100200-15cdf3d5e971a0; __mfwlt=1498394084; CNZZDATA30065558=cnzz_eid%3D457041617-1498390723-null%26ntime%3D1498390858",
         "Host":"www.mafengwo.cn",
         "Origin":"http://evil.com/",
         "Referer":"https://www.mafengwo.cn/sales/",
         "Upgrade-Insecure-Requests":"1",
         "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
}
function Crawler(url,cb) {
    superagent
        .get(url)
        .set(requestHeaders)
        .end((err,data)=>{
           let $ = cheerio.load(data.text);
            $("#listContent .item").each((index,item)=>{
                let pic = $(item).find(".image img").attr("src");
                console.log(pic);
                let title = $(item).find(".detail .info").children("h3").text();
                console.log(title);
                let price = $(item).find(".detail .extra .price").children("strong").text();
                console.log(price);
                ProductModel.add({"title":title,"price":price,"cat":pic},(err,result)=>{
                    cb(err,result);
                })
            })
    })
}
module.exports = Crawler