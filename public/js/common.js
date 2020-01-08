$(function(){
  // 引入公共头
  $.ajax({
    url:"header.html",
    success:function(html){
      $("header").append(html)
    }
  })
  // 引入公共脚
  $.ajax({
    url:"footer.html",
    success:function(html){
      $("footer").append(html)
    }
  })
})