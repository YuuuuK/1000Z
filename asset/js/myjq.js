//首页广告
$(document).ready(function(){
	
	var oUl = $(".new-ul");
	var num = -20;
	var timer = setInterval(move,3000);
	function move() {
		oUl.animate({top:num});
		num += -20;
		if(num == -100){
			num = 0;
		}
	}
})

//侧边栏 X按钮隐藏
$(function(){
	var onoff = true;
	$('.x').on("click", function(){
		if(onoff){
			$('.r-fixed').animate({
				right:'-50px',
			});
			$('.x').css({
					backgroundPosition: "-32px -638px"
				}
			)
		}else{
			$('.r-fixed').animate({
				right:'0',
			});
			$('.x').css({
					backgroundPosition: "0 -638px"
				}
			)
		}
		onoff =! onoff
	
	})
})

$(function(){
	//右边栏上下
	var oDown = $('.li5');
	var oUp = $('.li1');
	var oCbtn = $('.new-i');
	oUp.on('click',function(e){
//		console.log(1);
		e.preventDefault();
		$.fn.fullpage.moveSectionUp();
	})
	oDown.on('click',function(e){
//		console.log(2);
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	})
	oCbtn.on('click',function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	})
})

//雪山轮播

$(function(){
	var oGul =$('.gy-ul2');
	var left = oGul.css('left');
	var aGli = $('.gy-ul2 li');
	var now = 0;
	aGli.mousedown(function(){
		now ++;
		if(now >= 4){
			now = 1;
		}
		console.log(now);
		oGul.animate({
			left: -now* aGli.width(),
		},function(){
			if(now == 3){
				oGul.css('left','0');
			}
		})
	})
})




//阴影
//$(function(){
//	var oUll = document.getElementsByTagName("ul")[0];
//	var aLi = oUll.getElementsByTagName("li");
//	var oYi = document.getElementById('kh-yin');
//	var arr = [];
//	for (var i = 0;i <aLi.length; i++ ){
//		aLi[i] = {
//			left:getStyle(aLi[i],"left"),
//			top:getStyle(aLi[i],"top"),
//			width:getStyle(aLi[i],"width"),
//			height:getStyle(aLi[i],"height"),
//		}
//	}
//	
//	aLi.onmouseenter=function(){
//		arr.push(arr.shift());
//		fn();
//	}
//	
//	function fn() {
//		for(var i=0; i<aLi.length; i++){
//			movement({
//				ele:aLi[i],
//				target:{
//					left:arr[i].left,
//					top:arr[i].top,
//					width:arr[i].width,
//					height:arr[i].height,
//					
//				},
//				time:1000,
//				type:"backOut"
//			
//			})
//		}
//	}
//	
//})

//首页动画
window.onload=function(){
	$('.bgc-con-a1').animate({left:'0px',opacity:'1'},500);
	$('.bgc-con-a2').animate({right:'0px',opacity:'1'},500);
}


//阴影
$(function(){
//	var oBx4 = $('.box4');
//	var oB_act = $('.box4 .active');
	var oB_ul4 = $('.kh-ul');	
	var oB_li4 = $('.kh-ul li');
	var oB_i = $('.kh-i');	

	oB_li4.on('mouseover' , function(){
		var m = $(this).index();
		console.log(m);
		if(m <5 ){
			oB_i.css({left:m*230,top:129})
		}else{
			oB_i.css({left:(m-5)*230,top:279})
		}
	})

	oB_ul4.on('mouseenter mouseleave', function () {
		oB_i.toggle();

	})

})
