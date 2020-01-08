/**************注册页面**************/
// 1.找触发事件的元素
var uname=document.getElementById("uname");
var upwd=document.getElementById("upwd");
var spans=document.querySelectorAll(".reg_body span");
// 2.正则验证
var regn=/^[a-zA-Z0-9_-]{4,16}$/;
var regp=/^[a-zA-Z0-9]{6,10}$/;

// 点击input后触发提示信息
uname.onclick=function(){
  spans[0].style.display="block";
}
upwd.onclick=function(){
  spans[1].style.display="block";
}
cpwd.onclick=function(){
  spans[2].style.display="block";
  spans[2].innerHTML="请再次输入密码";
}
// 输入完毕失去焦点后验证正则
// 用户名验证
uname.onblur=function(){
  var $uname=uname.value;
  if(regn.test($uname)){
    var xhr=new XMLHttpRequest();
    check_name=xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            if(result==1){
              spans[0].className="reg_fail";
              spans[0].innerHTML="用户名被占用";
              return false;
            }else{
              spans[0].className="reg_suc";
              spans[0].innerHTML="账户名可用";
              return true;
            }
        }
    }
    xhr.open("get","/pro/searuser/"+$uname,true);
    xhr.send(); 
  }
}
// 密码验证
upwd.onblur=function(){
  var $upwd=upwd.value;
  if(regp.test($upwd)){
    spans[1].className="reg_suc";
    spans[1].innerHTML="密码格式正确";
  }else{
    spans[1].className="reg_fail";
    spans[1].innerHTML="6-10位密码,只能用字母和数字";
  }
}
// 再次输入密码验证
cpwd.onblur=function(){
  var $cpwd=cpwd.value;
  var $upwd=upwd.value;
  if(regp.test($cpwd)&&$cpwd==$upwd){
    spans[2].className="reg_suc";
    spans[2].innerHTML="确认密码正确";
  }else{
    spans[2].className="reg_fail";
    spans[2].innerHTML="两次输入的密码不一致";
  }
}
// 注册按钮验证之前所有条件是否成立
var regbtn=document.getElementById("regbtn");
regbtn.onclick=function(){
  var $uname=uname.value;
  var $upwd=upwd.value;
  var $cpwd=cpwd.value;
  if(regn.test($uname)&&regp.test($cpwd)&&$cpwd==$upwd&&check_name()){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            console.log(result);
            if(result==1){
              alert("注册成功!");
            }else{
              alert("注册失败!");
            }
        }
    }
    xhr.open("post","/pro/regUser",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var formdata="uname="+$uname+"&upwd="+$upwd;
    xhr.send(formdata); 
  }else{
    alert("注册失败!");
  }
}