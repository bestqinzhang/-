var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	port:8889,
	database:'shiyan'
})

router.get('/', function(req, res, next) {
  res.render('admin', {});
});

//获取
router.get('/getallnews',function(req,res){
	var sql = 'SELECT * FROM `news`';
	con.query(sql,function(err,rows,f){
		if(err){
			console.log(err)
		}else{
			res.send(rows)
		}
	})
});

//删除
router.post('/delete',function(req,res){
	var id=req.body.id;
	con.query('DELETE FROM `news` WHERE id='+id,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//增加新闻
router.post('/addnews',function(req,res){
	var title=req.body.title;
	var content=req.body.content;
	var address=req.body.address;
	var src=req.body.src;
	var time=req.body.time;
	var type=req.body.type;

	if(!title || !time || !content || !type){
		res.status(400).send('arg error').end();
	}else{
		con.query('INSERT INTO `news`(`title`,`content`,`地址`,`src`,`time`,`type`) VALUES (?,?,?,?,?,?)',[title,content,address,src,time,type],function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
		})
	}
})



//修改
router.post('/modify',function(req,res){
	var title=req.body.title;
	var content=req.body.content;
	var address=req.body.address;
	var src=req.body.src;
	var time=req.body.time;
	var type=req.body.type;
	var id=req.body.id

		var sql='UPDATE `news` SET `title`=?,`src`=?,`type`=?,`content`=?,`time`=?,`地址`= ? WHERE `id`=?';
		var arr=[title,src,type,content,time,address,id]
		con.query(sql,arr,
			function(err,result,f){
			if(err){
				console.log(err);
				res.status(500).send('datebase error').end();
			}else{
				res.send(result)
			}
		})
})

module.exports = router;