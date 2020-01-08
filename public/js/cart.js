$(()=>{
  var getData = JSON.parse(localStorage.getItem('prodata')); 
  function loadcart(){
    $.ajax({
      url:"http://localhost:5500/pro/searchProduct",
      type:"get",
      dataType: "json",
      success:function(result){
        var  str="";
        var sum1=0;
        var sum2=0;
        $.each(getData,(i,item)=>{
          str+=`
          <div class="products">
          <div class="checkbox"><input type="checkbox" checked></div>
          <div class="pro">
            <a href="${item.href}"><img src="${item.pic1}" alt=""></a>
            <p class="pname">${item.title}</p>
            <span class="ename">${item.etitle}</span>
            <p class="details">${item.details}</p>
          </div>
          <div class="price">$${item.price1.toFixed(2)}</div>
          <div class="count">
            <div class="count_box">
              <div data-count>${item.n}</div>
              <div data-addbtn onselectstart="return false;"><img src="./img/cart/plus.png" alt=""></div>
              <div data-minusbtn onselectstart="return false;"><img src="./img/cart/reduce.png" alt=""></div>
            </div>
          </div >
          <div class="buy">
            <p data-price1>$${(item.price1*item.n).toFixed(2)}</p>
            <p data-price2>约${(item.price2*item.n).toFixed(2)}</p>
          </div>
          <div class="selected">
            <div class="btnbuy">立即购买</div>
            <div class="btndel">删除</div>
          </div>
        </div>
          `
          sum1+=item.price1*item.n;
          sum2+=item.price2*item.n;
        })
        $("#eprice").html(`$${sum1.toFixed(2)}`)
        $("#cprice").html(`约${sum2.toFixed(2)}`)
        $(".cart_content").html(str);
        // 全选
        $(".title  input").on("input",function(){
          var bool=$(this).prop("checked");
          console.log(bool);
          $(".cart input").prop("checked",bool);
        })
        //反选:取消其中一个复选框,则全选按钮取消勾选
        $(".products  input").on("input",function(){
          var $inputs=$(".products  input");
          
          if(!$(this).prop("checked")){
            $(".title input").prop("checked",false);
          }
          function selectAll(){
            for(var i=0;i<$inputs.length;i++){
              if(!$inputs[i].checked){
                return true;
              }
            }
          }
          if(!selectAll()){
            $(".title input").prop("checked",true);
          }
        })
      }
    })
  }
  loadcart();

  //删除商品
  $(".cart").on("click",".btndel",function(){
    var i=$(this).parent().parent().index();
    getData.splice(getData[i-1],1);
    $(this).parent().parent().slideUp();
    setTimeout(function(){
      $(this).parent().parent().remove();
      loadcart();
    },200)
    
    localStorage.setItem('prodata',JSON.stringify(getData)); 

  }) 

  // 减商品
  $(".cart").on("click","[data-minusbtn]",function(){
    var $countn = parseInt($(this).prev().prev().html());
    if($countn>1){
      $(this).prev().prev().html($countn-1)
      var i=$(this).parent().parent().parent().index();
      getData[i].n=$countn-1;
      localStorage.setItem('prodata',JSON.stringify(getData));
      loadcart();
    }
  })

  // 加商品
  $(".cart").on("click","[data-addbtn]",function(){
    var $countn = parseInt($(this).prev().html())+1;
    $(this).prev().html($countn);
    var i=$(this).parent().parent().parent().index();
    getData[i].n=$countn;
    localStorage.setItem('prodata',JSON.stringify(getData));
    loadcart();
  })
})


