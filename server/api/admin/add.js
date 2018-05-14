import { Router } from 'express'
import mysql from 'mysql'
import sd from 'silly-datetime'

const router = Router()

var db = mysql.createPool({host:'localhost', user:'root', password:'123456', database:'blog'} );

router.post('/',(req,res)=>{
	var title = req.body.title;
	var introduce = req.body.introduce;
	var content = req.body.content;
	var date = sd.format('YYYY-MM-DD HH:mm:ss');
	if(!title || !introduce || !content || !date){
		res.json({msg:'输入错误'});
	}else{
		db.query(`INSERT INTO blog_table (title,introduce,content,date)
			VALUE ('${title}','${introduce}','${content}','${date}')`,
			(err, data) =>{
				if(err){
					console.log(err);
					return res.json({msg:'服务器连接失败'});
				}else{
					return res.json({msg:'添加成功'});
				}
			}
		);
	}
	
})

export default router