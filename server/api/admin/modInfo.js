import { Router } from 'express'
import mysql from 'mysql'
import sd from 'silly-datetime'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.post('/',(req,res)=>{
	var id = req.query.id;
	console.log(id);
	var date = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
	db.query(`SELECT * FROM blog_table WHERE id = ${id}`,
		(err, data) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败'});
			}else{
				return res.json(data);
			}
		}
	);
	
})

export default router