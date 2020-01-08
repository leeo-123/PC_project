$(function(){
  // 获取URL lid参数
  var url =window.location.href;
  var lid=url.split("=")[1];
  $.ajax({
    url:"http://localhost:5500/pro/product_details",
    data:{lid},
    type:"get",
    dataType: "json", //自动将服务器端返回的json字符串翻译为js数组或对象，不用再自己写JSON.parse()
    success: function(result){ //onreadystatechange
    //会在成功接收到响应结果后自动触发
      //result参数会自动获得服务器端返回的响应结果
      // console.log(result);
      var p=result[0];
      var str="";
      str+=`      <div class="dtitle">
      <p>${p.title}${p.etitle}</p>
      <h1>${p.details}</h1>
      </div>
      <div class="pcontent">
      <div class="pics">
        <div class="mdpic">
          <div class="blank"></div>
          <div class="mask d-none"></div>
          <img src="${p.pic1}" alt="">

        </div>
        <div class="smpics">
          <a class="smpic active"><img src="${p.pic1}" alt=""></a>
          <a class="smpic"><img src="${p.pic2}" alt=""></a>
          <a class="smpic"><img src="${p.pic3}" alt=""></a>
        </div>
        <div class="zoom d-none" style="background:url(${p.pic1}) no-repeat"></div>
      </div>
      <div class="pinfo">
        <div>
          <div class="yprice">
            <span>原价</span>
            <span>$${p.price1} (约${p.price2}元)</span>
          </div>
          <div class="cprice">
            <span>折扣价</span>
            <span>$${p.price1}</span>
            <span>(约${p.price2}元)</span>
          </div>
        </div>
        <div>
          <span>购物车</span>
          <span>现金积分 本商品无法使用积分购买</span>
        </div>
        <div>
          <span>商品信息</span>
          <span>商家编码:20191219${lid} | 商品条形码:88716740021${lid}</span>
        </div>
        <div>
          <span>颜色</span>
          <span>棕色</span>
          <img src="${p.pic1}" alt="">
        </div>
        <div>
          <span>规则</span>
          <span>15ml#50ml</span>
        </div>
        <div>
          <span>数量</span>
          <div id="minus" onselectstart="return false;">-</div>
          <div id="countn">1</div>
          <div id="add" onselectstart="return false;">+</div>
        </div>
        <div>
          <span>商家信息</span>
          <span>环宇旗舰店</span>
        </div>
        <p>根据公司和品牌政策，部分的现金积分和积分可能无法使用; 商品价格不包含税费和运费。</p>
        <div class="btn1" onselectstart="return false;">加入购物车</div>
        <div class="btn2" onselectstart="return false;">立即购买</div>
        <img src="./img/footer/bottom_2.png" alt="">
      </div>
    </div>`;
      $("#content").append(str);


        // 加减商品数量
        // 减
      $("#minus").click(function(){
        var $n=$("#countn").html();
        if($n>1){
          $("#countn").html(`${$n-1}`);
        }else{
          $("#minus").prop("disabled",true);
        }
      })
      // 加
      $("#content").on("click","#add",function(){
        var $n=parseInt($("#countn").html());
        $("#countn").html(`${$n+1}`)
      })

        // 放大镜
        // 1.切换图片
      $(".smpic>img").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        var pich=$(this).attr("src");
        $(".mdpic>img").attr("src",pich);
        $(".zoom").css({"background":`url(${pich}) no-repeat`});
      })

        // 2.鼠标移入/移出显示/隐藏
      $(".blank").hover(function(){
        $(".mask").toggleClass("d-none");
        $(".zoom").toggleClass("d-none");
        }
      )

        // 3.mask跟随鼠标移动
      $(".blank").mousemove(function(e){
        var left=e.offsetX-88;
        var top=e.offsetY-88;
        var max=273;
        if(left<0) left=0;
        else if(left>max) left=max;
        if(top<0) top=0;
        else if(top>max) top=max; 
        $(".mask").css({left,top});
        var backgroundposition=`${-733/460*left}px ${-733/460*top}px`;
        $(".zoom").css({"background-position":backgroundposition});
      })
      
      // 4.添加购物车
      // 将获取的数据存入localStorage 注意数据需要进行对应的 json 格式转换
      $(".btn1").click(function(){
        var getData = JSON.parse(localStorage.getItem('prodata')); 
        if(!getData){
          p.n=parseInt($("#countn").html());
          localStorage.setItem('prodata',JSON.stringify(result)) 
        }else{
          // 在缓存数据中查找是否已存在当前添加的商品
          //存在+1
          function chongfu(){
            for(var i=0;i<getData.length;i++){
              if(p.lid==getData[i].lid){
                getData[i].n+=parseInt($("#countn").html());
                return 1;
              }
            }
          }
          //不存在 就添加
          if(!chongfu()){
            p.n=parseInt($("#countn").html());
            getData.push(p)
          }
          console.log(getData)
          localStorage.setItem('prodata',JSON.stringify(getData)) 
        }
        alert(`商品${p.title}${p.details}\n已添加至购物车!`)
      })
    }
  });
})