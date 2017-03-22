$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200){
			$('.head').removeClass('large').addClass('small');
		} else {
			$('.head').removeClass('small').addClass('large');
		}
	});
});


$(function() {
	var timer = null, oCon = $("#header  .ser .ew");
	$(".ser p.share a.sina, #header  .ser .ew").mouseover(function(e) {
		_index=$(this).index();
		clearTimeout(timer);
		e.target.tagName.toUpperCase() === "A" && oCon.stop(true, true).show();
	}).mouseout(function() {
		timer = setTimeout(function() {
			oCon.hide()	;
		}, 50)
	});
});
$(function() {
	var timer = null, oCon = $("#header  .ser .ew1");
	$(".ser p.share a.winxin, #header  .ser .ew1").mouseover(function(e) {
		_index=$(this).index();
		clearTimeout(timer);
		e.target.tagName.toUpperCase() === "A" && oCon.stop(true, true).show();
	}).mouseout(function() {
		timer = setTimeout(function() {
			oCon.hide()	;
		}, 50)
	});
});
/*下拉菜单*/
var  _index=0;
var len=$(".drop-down").find(".nav-down-cell").length;
var But=$("#header  .nav_list li a").length;
var h=$(".nav-down-cell").height();

/*function partComm(selBut,Con){
		//alert(selBut+"---"+imgCon +Con);
		var _index=0;
		$(selBut).mouseover(function(){
		_index=$(this).index();
		$(Con).eq(_index).show().siblings().hide();
});

};
partComm("#header  .nav_list li",".drop-down .nav-down-cell");
*/
$(function() {
	var timer = null, oCon = $(".nav-down-cell");
	$("#header  .nav_list li, .nav-down-cell").mouseover(function(e) {
		_index=$(this).index();
		clearTimeout(timer);
		e.target.tagName.toUpperCase() === "A" && oCon.eq(_index).stop(true, true).show().siblings().hide();
	}).mouseout(function() {
		timer = setTimeout(function() {
			oCon.eq(_index).hide()	;
		}, 50)
	});
});

/*banner start*/
$(".top_slide_wrap").hover(function(){
      $(".op_btns").show();
},function(){
      $(".op_btns").hide();
})

/*banner new start*/
var _index3=0;
$(".inews .new .preva").click(function(){
	  clearInterval(bannerTime);
	      _index3++;
		  if(_index3>2){
			  _index3=0;
		   $(".new .banlist").css("bottom","50px");
           $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
		  }
           $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
})
$(".inews .new .preva").mouseout(function(){
		            autoPlay1();
		   })

$(".inews .new .nexta").click(function(){
	clearInterval(bannerTime);
	      _index3--;
		 if(_index3<0){
			 _index3=2;
			 $(".new .banlist").css("bottom","-150px");
             $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
		 }
			$(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
})
$(".inews .new .nexta").mouseout(function(){
		            autoPlay1();
		   })
function autoPlay1(){
               bannerTime=setInterval(function(){
			           _index3++;
					  if(_index3>2){
						  _index3=0;
					   $(".new .banlist").css("bottom","50px");
					   $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
					  }
					   $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
			   },2000)
}
autoPlay1();
/*选项卡*/
var _index4=0;
$(" .coll .coll_list  a").click(function(){
	           _index4=$(this).index();
              $(this).addClass("hover").siblings().removeClass("hover");
			  $(" .con .cont").eq(_index4).show().siblings().hide();
})


	// 滑动鼠标滚轮
	$(window).scroll(function(){
		// 判断隐藏显示
		if($(window).scrollTop() >= 500){
			$("#float").fadeIn(300);
		} else {
			$("#float").stop(true,true).fadeOut(300);
		}
	});
	// 点击回到顶部时
	$("#float").click(function(){
		$("html,body").animate({
			scrollTop:0
		},2000);
	});

