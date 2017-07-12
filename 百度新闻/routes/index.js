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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

//推荐的路由
router.get('/tuijian',function(req,res){
	var type='推荐';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//百家的路由
router.get('/baijia',function(req,res){
	var type='百家';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//本地的路由
router.get('/bendi',function(req,res){
	var type='本地';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//娱乐的路由
router.get('/yule',function(req,res){
	var type='娱乐';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//社会的路由
router.get('/shehui',function(req,res){
	var type='社会';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//社会的路由
router.get('/junshi',function(req,res){
	var type='军事';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//女人的路由
router.get('/nren',function(req,res){
	var type='女人';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//搞笑的路由
router.get('/gaoxiao',function(req,res){
	var type='搞笑';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//互联网的路由
router.get('/hulian',function(req,res){
	var type='互联网';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
//科技的路由
router.get('/keji',function(req,res){
	var type='科技';
	con.query('SELECT * FROM `news` WHERE type=?',type,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send(result)
		}
	})
})
module.exports = router;
