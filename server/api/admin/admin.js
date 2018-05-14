import { Router } from 'express'
import mysql from 'mysql'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.get('/',(req,res,next)=>{
	var current = 1;
	if(req.query.current){
		current =parseInt(req.query.current);
	}
	db.query(`SELECT  count(id) FROM blog_table`,
		(err, count) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败',is:false});
			}else{
				db.query("SELECT * FROM blog_table limit "+(current-1)*9+",9",
					(err, data) =>{
						if(err){
							console.log(err);
							return res.json({msg:'服务器连接失败',is:false});
						}else{
							return res.json({count:count,data:data});
						}
					});
			}
		});
})

export default router
