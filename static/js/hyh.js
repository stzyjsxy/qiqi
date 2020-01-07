var obj = document.getElementById("frameContent");  //获取内容层
var pages = document.getElementById("pages");         //获取翻页层
var pgindex=1;                                      //当前页
var allpage;
window.onload = function()                             //重写窗体加载的事件
{	
	//更换新闻主题
	$("#first-page").click(function(){//主页
		$("#home-news").css("display","block");
		$("#science-news").css("display","none");
	});
	$(".science").click(function(){//主页
		$("#home-news").css("display","none");
		$("#science-news").css("display","block");
	});
	
	
	$(".jq-dom-bkcolor").click(function(){
		$(this).css("background-color","#e4e4e4").siblings().css("background-color","#f5f5f5"); 
		$(".menu_page").find(".ssvg").css("fill","#707070");
		$(this).find(".ssvg").css("fill","red");
	})
	
	
	
	var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
	//obj.scrollHeight网页内容的高度，最小值是clientHeight。offsetHeight显示高度
	//pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
	//pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
	allpage=allpages;
	pages.innerHTML += "<a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"../static/img/refresh.png\" width=15px ></a>"
//alert(obj.scrollHeight);
}
function gotopage(value){
	try{
		value=="-1"?showPage(pgindex-1):showPage(pgindex+1);
	}catch(e){

	}
}
function showPage(pageINdex)//2
{	//alert(obj.scrollTop);	
	obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);//根据高度，输出指定的页
	pgindex=pageINdex;
	//pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
	//pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
	pages.innerHTML = "  <a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"../static/img/refresh.png\" width=15px></a>"
	
	if(pgindex==allpage)
		{
			pgindex=0;
		}
}


 
 
 
 
 
 
 /* 
 var obj = document.getElementById("frameContent");  //获取内容层
  var pages = document.getElementById("pages");         //获取翻页层
  var pgindex=1;                                      //当前页
 var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
  window.onload = function()                             //重写窗体加载的事件
  {
  
 	{
		//Math.ceil:向上去整数
		//parseInt:解析字符串,如parseInt("10",2) 会以二进制解析"10",结果为2
		//obj.offsetTop 指 obj 距离上方或上层控件的位置，整型，单位像素。
		//obj.offsetLeft 指 obj 距离左方或上层控件的位置，整型，单位像素。
		//obj.offsetWidth 指 obj 控件自身的宽度，整型，单位像素。
		//obj.offsetHeight 指 obj 控件自身的高度，整型，单位像素。（clientHeight + 滚动条 + 边框）
		//obj.scrollHeight网页内容的高度，最小值是clientHeight。
		//alert(obj.scrollHeight);
 	}
     
		//pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
		//pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
		pages.innerHTML += "  <a href=\"javascript:gotopage('1');\">换一换</a>"
 	 
 }
  function gotopage(value){ 
  try{
   value=="-1"?showPage(pgindex-1):showPage(pgindex+1);
   }catch(e){
   }
  }
  function showPage(pageINdex)
  {
 		
		obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);                                                                  //根据高度，输出指定的页
		pgindex=pageINdex;
		//pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
		//pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
		pages.innerHTML += "  <a href=\"javascript:gotopage('1');\">换一换</a>"
		if(pgindex==allpages)
		{
			pgindex=0;
		}	   
  }
  */