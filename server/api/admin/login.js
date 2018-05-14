import { Router } from 'express'
import mysql from 'mysql'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.post('/',(req, res)=>{
	var user = req.body.user;
	var pass = req.body.pass;
	db.query(`SELECT * FROM admin_table WHERE user='${user}'`,
		(err, data) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败',is:false});
			}else{
				if(data.length==0){
					return res.json({msg:'无此用户',is:false});	
				}else{
					if(data[0].pass == pass){
						req.session['isLogin']=true;
						return res.json({msg:'登录成功',is:true});
					}else{
						return res.json({msg:'密码错误',is:false});
					}
				}
			}
		});
})


export default router
