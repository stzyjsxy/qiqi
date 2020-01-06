window.onload = function()                             //重写窗体加载的事件
{	
	$(".science").click(function(){
		$("#home-news").css("display","none");
		$("#science-news").css("display","block");
	});
	$("#first-page").click(function(){
		$("#home-news").css("display","block");
		$("#science-news").css("display","none");
	});
	
}