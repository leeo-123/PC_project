/**************登录页面**************/
// 1.找触发事件的元素
var uname=document.getElementById("uname");
var upwd=document.getElementById("upwd");
var spans=document.querySelectorAll(".reg_body span");
var logbtn=document.getElementById("logbtn");
// 登录只需要判空
uname.onblur=function(){
    if(uname.value==""){
        spans[0].style.display="block";
        spans[0].className="reg_fail";
    }
}
upwd.onblur=function(){
    if(upwd.value==""){
        spans[1].style.display="block";
        spans[1].className="reg_fail";
    }
}
uname.onclick=function(){
    spans[0].style.display="none";
}
upwd.onclick=function(){
    spans[1].style.display="none";
}
logbtn.onclick=function(){
    var $uname=uname.value;
    var $upwd=upwd.value;
    if($uname!=""&&$upwd!=""){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                if(result==1){
                    alert("登陆成功!");
                    // var logbtn=document.getElementsByClassName("logbtn");
                    // logbtn.innerHTML=`欢迎${uname.value}`
                    window.open("index.html","_self");
                    
                }else{
                    alert("账户名或密码错误!")
                }
            }
        }
        xhr.open("get","/pro/login/"+$uname+"&"+$upwd,true);
        xhr.send(); 
    }
}