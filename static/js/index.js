var obj = document.getElementById("frameContent");  //获取内容层
var pages = document.getElementById("pages");         //获取翻页层
var pgindex=1;                                      //当前页
var allpage;
window.onload = function()                             //重写窗体加载的事件
{	
	//显示、隐藏左栏目--
	$(".hide_show").click(function(){
		$(".menu_page").toggle(200);
	}),
	//菜单按钮的背景事件
	$("#hide_show_bg").hover(
		function(){//滑进按钮背景
			$(this).css("background-color","#e4e4e4");
		},
		function(){//滑出背景按钮
			$(this).css("background-color","white");
	})
	
	//查询焦点search
	//$(".search").focus();
/*--------------------------------------------------------------------------------------------------*/	
/*--------------------------------------------------------------------------------------------------*/	
	// mini登录窗口
	var miniLogin = document.getElementById("mini-login");
	var loginWindown = document.getElementById("login-windown");	 
	miniLogin.onmouseover=function(){
			loginWindown.style.display='block';
		};
		// miniLogin.onmouseout=function(){
		// 	loginWindown.style.display='none';
		// };
	
	    // 点击空白隐藏窗口
		document.addEventListener("click",function(){
			loginWindown.style.display="none";
		});
		loginWindown.addEventListener("click",function(event){
			event=event||window.event;
	  		event.stopPropagation();
	 	});	 
	
	
	var $slides = $('.slide_pics li');
	var len = $slides.length;
	var nowli = 0;
	var prevli = 0;
	var $prev = $('.prev');
	var $next = $('.next');
	var ismove = false;
	var timer = null;
	$slides.not(':first').css({left:760});
	$slides.each(function(index, el) {
		var $li = $('<li>');
	
		if(index==0)
		{
			$li.addClass('active');
		}
	
		$li.appendTo($('.points'));
	});
	$points = $('.points li');
	timer = setInterval(autoplay,4000);
	
	$('.slide').mouseenter(function() {
		clearInterval(timer);
	});
	
	$('.slide').mouseleave(function() {
		timer = setInterval(autoplay,4000);
	});
	
	function autoplay(){
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');
	}
	
	$points.click(function(event) {
		if(ismove)
		{
			return;
		}
		nowli = $(this).index();
	
		if(nowli==prevli)
		{
			return;
		}
		
		$(this).addClass('active').siblings().removeClass('active');
		move();
	
	});
	
	$prev.click(function() {
		if(ismove)
		{
			return;
		}		
		nowli--;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');
	
	});
	
	$next.click(function() {
		if(ismove)
		{
			return;
		}		
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');
	
	});
	
	
	function move(){
	
		ismove = true;
	
		if(nowli<0)
		{
			nowli=len-1;
			prevli = 0
			$slides.eq(nowli).css({left:-760});
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo');
			$slides.eq(prevli).animate({left:760},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			return;
		}
	
		if(nowli>len-1)
		{
			nowli = 0;
			prevli = len-1;
			$slides.eq(nowli).css({left:760});
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo');
			$slides.eq(prevli).animate({left:-760},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			return;
		}
	
	
		if(prevli<nowli)
		{
			$slides.eq(nowli).css({left:760});			
			$slides.eq(prevli).animate({left:-760},800,'easeOutExpo');
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			
		}
		else
		{			
			$slides.eq(nowli).css({left:-760});			
			$slides.eq(prevli).animate({left:760},800,'easeOutExpo');	
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;		
		}
	
	}
/*--------------------------------------------------------------------------------------------------*/	
/*--------------------------------------------------------------------------------------------------*/	
	//切换新闻主题	
	$(".jq-dom-bkcolor").click(function(){
		//alert($(this).text().indexOf("科学与技术") )
		//页面回到顶部
		setTimeout(function(){
			document.documentElement.scrollTop = 0;  //ie下
			document.body.scrollTop = 0;  //非ie
		},150)
		
		if($(this).text().indexOf("首页")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-content.html';
			},150);
			
		}
		if($(this).text().indexOf("为您推荐")!=-1){
			setTimeout(function(){
			document.getElementById("home-news").src='news-body-recommend.html'
			},150);
		}
		if($(this).text().indexOf("收藏夹")!=-1){
			setTimeout(function(){
			document.getElementById("home-news").src='news-body-collect.html'
			},150);
		}
		if($(this).text().indexOf("全球")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-world.html'
			},150);
		}
		if($(this).text().indexOf("科学与技术")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-science.html'
				},150);
		}
		if($(this).text().indexOf("体育")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-sports.html'
			},150);
			
		}
		if($(this).text().indexOf("娱乐")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-funny.html'
			},150);
			
		}
		if($(this).text().indexOf("财经")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-caijing.html'
			},150);
			
		}
		if($(this).text().indexOf("发布新闻")!=-1){
			setTimeout(function(){
				document.getElementById("home-news").src='news-body-publish.html'
			},150);
			
		}
		
		//添加div背景颜色
		$(this).css("background-color","#e4e4e4").siblings().css("background-color","#f5f5f5"); 
		//$("this.a").css("color","red").siblings().css("color","black"); 
		//添加右边框显示
		$(this).css("border-right","3px solid red").siblings().css("border-right","3px solid #f5f5f5");
		
		//更改图标颜色
		$(".menu_page").find(".ssvg").css("fill","#707070");
		$(this).find(".ssvg").css("fill","red");
		//更换文字颜色
		$(".jq-dom-bkcolor").find("a").css("color","black");
		$(this).find("a").css("color","red")
	})
/*--------------------------------------------------------------------------------------------------*/	
/*--------------------------------------------------------------------------------------------------*/	
/*--------------------------------------------------------------------------------------------------*/	
/*--------------------------------------------------------------------------------------------------*/	
/*以下是小窗口新闻热点内容*/	
	var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
	//obj.scrollHeight网页内容的高度，最小值是clientHeight。offsetHeight显示高度
	//pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
	//pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
	allpage=allpages;
	pages.innerHTML += "<a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"./static/img/refresh.png\" width=15px ></a>"
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
	pages.innerHTML = "  <a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"./static/img/refresh.png\" width=15px></a>"
	
	if(pgindex==allpage)
		{
			pgindex=0;
		}
}

/*以上是小窗口新闻热点内容*/	
 
