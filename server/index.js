import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'

import bodyParser from 'body-parser'
import ueditor from 'ueditor'
import multer from 'multer'
import pathLib from 'path'
import fs from 'fs'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// 1.解析cookie-------------------------------------------------------------------------
const HT = 'dsdasfagdasgsd';
app.use(cookieParser(HT));

// 2.使用session------------------------------------------------------------------------
(function(){
	var arr = [];
	for(let i = 0; i < 10000; i++){
		arr.push('keys_' + Math.random());
	}
	app.use(cookieSession({
		name: 'admin_id',
		keys: arr,
		maxAge: 20*3600*1000
	}));
})();

// 3.post数据---------------------------------------------------------------------------
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/UE/ue", ueditor('static', function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/';
     var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认图片上传地址
        //上传图片的信息
        // var foo = req.ueditor;
        // console.log(foo.filename); // exp.png
        // console.log(foo.encoding); // 7bit
        // console.log(foo.mimetype); // image/png

        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/file/ueditor/'; //附件
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        // console.log('config.json')
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/UE/nodejs/config.json');
    }
}));

//post上传的文件
var objMulter = multer({dest: '../assets/upload/'});
app.use(objMulter.any());



// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
// Give nuxt middleware to express
app.use(nuxt.render)
// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
