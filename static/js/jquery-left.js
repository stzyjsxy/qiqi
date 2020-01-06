$(function(){
		//显示、隐藏左栏目--
		$(".hide_show").click(function(){
			$(".menu_page").toggle(200);
		}),
		//菜单按钮的背景事件
		$("#hide_show_bg").hover(
			function(){//滑进
				$(this).css("background-color","#e4e4e4");
			},
			function(){//滑出
				$(this).css("background-color","white");
		}),
		
		//查询焦点search   
		$(".search").focus();
		
		
});	

	
	




	
	