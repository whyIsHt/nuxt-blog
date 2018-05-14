import { Router } from 'express'
import mysql from 'mysql'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.get('/',(req,res,next)=>{
	var id = req.query.id;
	db.query(`SELECT * FROM blog_table WHERE id = ${id}`,
		(err, data) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败',is:false});
			}else{
				db.query(`UPDATE blog_table SET view=view+1 WHERE id ='${id}'`,
					(err, data) =>{
						if(err){
							console.log(err);
							return res.json({msg:'服务器连接失败'});
						}
					}
				);	
				data[0].view++;	
				return res.json(data);
			}
		});
})


export default router
