$(function(){
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


});	