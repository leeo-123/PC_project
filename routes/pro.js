const express=require("express");
const pool=require("../pool.js");
let router=express.Router();
//1.登录
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query("select * from ym_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.查询指定uname的用户信息
router.get("/searuser/:uname",(req,res)=>{
	var $uname=req.params.uname;
	pool.query("select * from ym_user where uname=?",[$uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
		
	});
});

//3.注册
router.post("/regUser",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	pool.query("INSERT INTO ym_user (uname,upwd) VALUES(?,?)",[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		res.send("1");
		console.log(result);
	});	
});

// 4.查询产品表1所有产品信息
router.get("/searchProduct",(req,res)=>{
	//查询数据库
	var sql="select * from ym_index_product";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});

// 4.查询产品表sale所有产品信息
router.get("/searchProductSale",(req,res)=>{
	//查询数据库
	var sql="select * from ym_index_product_sale";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});

// 5.查询产品表1指定id产品的详情
router.get("/product_details",(req,res)=>{
	var $lid=req.query.lid;
	pool.query("select * from ym_index_product where lid=?",[$lid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});

// 6.分页
router.get("/page",(req,res)=>{
	var $psize=req.query.psize;
	var $pno=(req.query.pno -1)*$psize;
	let sql =`select * from ym_index_product limit ${$pno},${$psize}`
	pool.query(sql,(err,result)=>{
		console.log("sql" , sql)
		if(err)throw err;
		if(result.length>0){
			res.send(result);
			console.log(result);
		}
	});
});

module.exports=router;