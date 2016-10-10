 $(function(){
      // var hei = $(".body li").css("width");
      // $(".body li").css('height', hei);    //将li的高度等同于其宽度
      // $(".body li").height($(".body li").width());
      // $(".body ul").height($(".body li").width());
      $(".navigation").toggle(function() {
        $(".box").show();
      }, function() {
        $(".box").hide();
      });
      $(".navigation").click(function() {
        $(".text1").hide();
        $(".text2").hide();
      });
      // $(".news li").height($(".news li").width());
      function Height(){
         $(".body li").height($(".body li").width());
         $(".body ul").height($(".body li").width());
         $(".news li").height($(".news li").width());
         $(".news ul").height($(".news li").width());
      }
      setInterval(Height,1000);
      $(".fixed").click(function(e) {
        var a = $("body").scrollTop();
        e.preventDefault();
        a -= 200;
        $("body").animate({scrollTop:a}, 300);
      });
    })
