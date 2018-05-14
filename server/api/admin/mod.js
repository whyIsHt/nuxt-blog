import { Router } from 'express'
import mysql from 'mysql'
import sd from 'silly-datetime'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.post('/',(req,res)=>{
	var id = req.body.id;
	var title = req.body.title;
	var introduce = req.body.introduce;
	var content = req.body.content;
	var date = sd.format('YYYY-MM-DD HH:mm:ss');
	db.query(`UPDATE blog_table SET title='${title}',introduce='${introduce}',content='${content}',date='${date}'
			WHERE id ='${id}'`,
		(err, data) =>{
			if(err){
				console.log(err);
				return res.json({msg:'服务器连接失败'});
			}else{
				return res.json({msg:'修改成功'});
			}
		}
	);
	
})

export default router