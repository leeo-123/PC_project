$(function(){
  $(".nav_left").removeClass("d-none");

  // 人气商品加载
  $.ajax({
    url:"http://localhost:5500/pro/searchProduct",
    type:"get",
    dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
    success: function(p){ //onreadystatechange
    //会在成功接收到响应结果后自动触发
      //result参数会自动获得服务器端返回的响应结果
      console.log(p);
      var str="";
      for(var i=0;i<8;i++){
        str+=`        <div class="product">
        <a href="${p[i].href}">
          <img src="${p[i].pic1}" alt="">
        </a>
        <p class="title">${p[i].title}</p>
        <span class="ename">${p[i].etitle}</span>
        <p>${p[i].details}</p>
        <div class="price">
          <span class="price1">$${p[i].price1}</span>
          <span class="price2">约${p[i].price2}元</span>
        </div>
        <p class="store">觅露旗舰店</p>
        </div>`;
        }
        $(".popular .products").append(str);
      }
  });

  // 分页按钮
  $(".next").click(function(){
    var $count=$(this).prev();
    if(($count.html()<3)){
      $count.html(parseInt($count.html())+1)
    }
    var pno=$count.html();
    $.ajax({
      url:"http://localhost:5500/pro/page",
      type:"get",
      data:{pno,psize:8},
      dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
      success: function(result){ //onreadystatechange
      //会在成功接收到响应结果后自动触发
        //result参数会自动获得服务器端返回的响应结果
        var str="";
        for(var p of result){
          str+=`        <div class="product">
          <a href="${p.href}">
            <img src="${p.pic1}" alt="">
          </a>
          <p class="title">${p.title}</p>
          <span class="ename">${p.etitle}</span>
          <p>${p.details}</p>
          <div class="price">
            <span class="price1">$${p.price1}</span>
            <span class="price2">约${p.price2}元</span>
          </div>
          <p class="store">觅露旗舰店</p>
          </div>`;
          }
          $(".popular .products").html(str);
        }
    });
  })
  $(".prev").click(function(){
    var $count=$(this).next();
    if($count.html()>1){
      $count.html(parseInt($count.html())-1)
    }
    var pno=$count.html();
    $.ajax({
      url:"http://localhost:5500/pro/page",
      type:"get",
      data:{pno,psize:8},
      dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
      success: function(result){ //onreadystatechange
      //会在成功接收到响应结果后自动触发
        //result参数会自动获得服务器端返回的响应结果
        var str="";
        for(var p of result){
          str+=`        <div class="product">
          <a href="${p.href}">
            <img src="${p.pic1}" alt="">
          </a>
          <p class="title">${p.title}</p>
          <span class="ename">${p.etitle}</span>
          <p>${p.details}</p>
          <div class="price">
            <span class="price1">$${p.price1}</span>
            <span class="price2">约${p.price2}元</span>
          </div>
          <p class="store">觅露旗舰店</p>
          </div>`;
          }
          $(".popular .products").html(str);
        }
    });
  })

  // 畅销榜商品加载
  $.ajax({ 
    url:"http://localhost:5500/pro/searchProduct",
    type:"get",
    dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
    success: function(p){ //onreadystatechange
    //会在成功接收到响应结果后自动触发
      //result参数会自动获得服务器端返回的响应结果
      var str="";
      for(var i=0;i<7;i++){
        str+=`            <div class="pro">
        <a href="${p[i].href}"><img src="${p[i].pic1}" alt=""></a>
        <p class="title">${p[i].title}</p>
        <p class="title2">${p[i].etitle}</p>
        <p class="pname">${p[i].details}</p>
        <span class="price1">$${p[i].price1}</span>
        <span class="price2">约${p[i].price2}元</span>
        <p class="store">天虹旗舰店</p>
      </div>`;
      }
      $(".hot .products").append(str);
    }
  }); 

  // 特价商品加载 
  $.ajax({
    url:"http://localhost:5500/pro/searchProduct",
    type:"get",
    dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
    success: function(p){ //onreadystatechange
    //会在成功接收到响应结果后自动触发
      //result参数会自动获得服务器端返回的响应结果
    var str="";
    for(var i=4;i<12;i++){
      str+=`        <div class="pro">
      <a href="${p[i].href}"><img src="${p[i].pic1}" alt=""></a>
      <p class="title">${p[i].title}</p>
      <p class="title2">${p[i].etitle}</p>
      <p class="pname">${p[i].details}</p>
      <span class="price1">$${p[i].price1}</span>
      <span class="price2">约${p[i].price2}元</span>
      <p class="store">环宇旗舰店</p>
    </div>`;
      }
      $(".sale .products").append(str);
    }
  });

  // 楼层点亮 回到顶部
  $("#toTop").on("click","div",function(e){
    var $this=$(this);
    console.log(`${$this.attr("id")}`);
    e.preventDefault();
        // 总距离
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if($this.attr("id")=="goTop"){
      // 总距离
      var dist=scrollTop;
    }else if($this.attr("id")=="popu"){
      var dist=scrollTop-900;
    }else if($this.attr("id")=="hot"){
      var dist=scrollTop-1800;
    }else if($this.attr("id")=="sale"){
      var dist=scrollTop-2630;
    }
    // 总步数
    var steps=20;
    // 总时间
    var dura=200;
    // 每步间隔时间
    var step=dist/steps;
        // 每步间隔时间
    var interval=dura/steps;
    var timer=setInterval(function(){
        window.scrollBy(0,-step);
        steps--;
        if(steps==0){
          clearInterval(timer);
          steps=20;
        }
    },interval)
    $this.addClass("light");
    $this.siblings().removeClass("light")
  });
  window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=500){
      $("#toTop").show();
    }else{
      $("#toTop").hide();
    }
    // $("#toTop").children().removeClass("light");
  }
})

