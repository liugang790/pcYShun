 var proindex=0;
 var proTime=null;
$("#Products .btn li").hover(function(){
	              clearInterval(proTime);
	              proindex=$(this).index();
                  $(this).addClass("hover").siblings("li").removeClass("hover");
				  $("#Products .prbanner li").eq(proindex).fadeIn().siblings().fadeOut();
},function(){
           proautoPlay();
});

function proautoPlay(){
proTime=setInterval(function(){
	     proindex++;
                 if(proindex>2){
				          proindex=0;
                          $("#Products .btn li").eq(proindex).addClass("hover").siblings("li").removeClass("hover");
				          $("#Products .prbanner li").eq(proindex).fadeIn().siblings().fadeOut();
				 }
                          $("#Products .btn li").eq(proindex).addClass("hover").siblings("li").removeClass("hover");
				          $("#Products .prbanner li").eq(proindex).fadeIn().siblings().fadeOut();
},4000)
}
proautoPlay();



/*解决方案*/
	$(".next a").click(function() {
		clearInterval(solTime);
		nextscroll()
	});

function solplay(){
         solTime=setInterval(function(){
		         nextscroll();
		 },3000)
}
solplay();
	function nextscroll() {
		var vcon = $(".v_cont ");
		var offset = ($(".v_cont li").width()) * -1;
		vcon.stop().animate({
			left: offset
		}, "slow", function() {
			var firstItem = $(".v_cont ul li").first();
			vcon.find("ul").append(firstItem);
			$(this).css("left", "0px");
			circle()
		})
	};

	function circle() {
		var currentItem = $(".v_cont ul li").first();
		var currentIndex = currentItem.attr("index");
		$(".circle li").removeClass("circle-cur");
		$(".circle li").eq(currentIndex).addClass("circle-cur")
	}
	$(".prev a").click(function() {
		clearInterval(solTime);
		var vcon = $(".v_cont ");
		var offset = ($(".v_cont li").width() * -1);
		var lastItem = $(".v_cont ul li").last();
		vcon.find("ul").prepend(lastItem);
		vcon.css("left", offset);
		vcon.animate({
			left: "0px"
		}, "slow", function() {
			circle()
		})
	});


	/*关于我们*/
$(function() {
	$(".nexc a").click(function() {
		nextscroll()
	});

	function nextscroll() {
		var vcon = $(".fc_show ");
		var offset = ($(".fc_show li").width()) * -1;
		vcon.stop().animate({
			left: offset
		}, "slow", function() {
			var firstItem = $(".fc_show ul li").first();
			vcon.find("ul").append(firstItem);
			$(this).css("left", "0px");
			circle()
		})
	};

	function circle() {
		var currentItem = $(".fc_show ul li").first();
		var currentIndex = currentItem.attr("index");
		$(".circle li").removeClass("circle-cur");
		$(".circle li").eq(currentIndex).addClass("circle-cur")
	}
	$(".prec a").click(function() {
		var vcon = $(".fc_show ");
		var offset = ($(".fc_show li").width() * -1);
		var lastItem = $(".fc_show ul li").last();
		vcon.find("ul").prepend(lastItem);
		vcon.css("left", offset);
		vcon.animate({
			left: "0px"
		}, "slow", function() {
			circle()
		})
	});
});