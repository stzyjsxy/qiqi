 var obj = document.getElementById("frameContent");  //获取内容层
  var pages = document.getElementById("pages");         //获取翻页层
  var pgindex=1;                                      //当前页
 alert(obj.offsetHeight);
  window.onload = function()                             //重写窗体加载的事件
  {
  var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
 	//obj.scrollHeight网页内容的高度，最小值是clientHeight。
 	//alert(obj.scrollHeight);
 	 //pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
 	 //pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
 	 pages.innerHTML += "  <a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"../static/img/change.png\" width=15px></a>"

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
 	   pages.innerHTML = "  <a href=\"javascript:gotopage('1');\">换一换 <img alt=\"change\" src=\"../static/img/change.png\" width=15px></a>"
 	   if(obj.scrollTop+240==obj.scrollHeight)
 	   //+240要和content.css的#frameContent的height一致
 	   {
 		   pgindex=0;
 	   }
 }
 
 
 
 
 
 
 
 
 
 /*var obj = document.getElementById("frameContent");  //获取内容层
  var pages = document.getElementById("pages");         //获取翻页层
  var pgindex=1;                                      //当前页
 
  window.onload = function()                             //重写窗体加载的事件
  {
  var allpages = Math.ceil(parseInt(obj.scrollHeight)/parseInt(obj. offsetHeight));//获取页面数量
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
     
      pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
 	 pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
 	 pages.innerHTML += "  <a href=\"javascript:gotopage('1');\">换一换</a>"
 	 
 }
  function gotopage(value,allpages){ 
  try{
   value=="-1"?showPage(pgindex-1):showPage(pgindex+1,allpages);
   }catch(e){
   }
  }
  function showPage(pageINdex,allpages)
  {
 		//alert(123);
 	   obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);                                                                  //根据高度，输出指定的页
 	   pgindex=pageINdex;
 	    pages.innerHTML = "<b>共"+allpages+"页</b> ";     //输出页面数量	 
 	   pages.innerHTML = "<b>当前第"+ pgindex +"页</b> ";
 	   pages.innerHTML += "  <a href=\"javascript:gotopage('1');\">换一换</a>"
 	   if(obj.scrollTop+120==obj.scrollHeight)
 	   {
 		   pgindex=0;
 	   }	   
  }*/
  