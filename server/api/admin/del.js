import { Router } from 'express'
import mysql from 'mysql'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.get('/',(req,res)=>{
	var id = req.query.id;
	db.query(`DELETE FROM blog_table WHERE id='${id}'`,
		(err, data) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败',is:false});
			}else{
				return res.json({msg:'删除成功',is:true});
			}
		}
	);
	
})

export default router