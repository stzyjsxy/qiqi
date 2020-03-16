$(function(){
    var num=1;
    var timer;
    var hasStarted = false;
    $(".banner .left").click(function(){
		//alert(123);
        stop();
        --num;
        num = num%$(".pic li").size();
        showpic(num);
    });
    $(".banner .right").click(function(){
        stop();
        ++num;
        num = num%$(".pic li").size();
        showpic(num);
    });
    function showpic(index){
        $(".pic li").eq(index).show().siblings().hide();
        $(".dot li").eq(index).css("background","red").siblings().css("background","#fff");
    }
    $(".dot li").hover(function () {
        stop();
        num = $(this).index();
        $(".pic li").eq(num).show().siblings().hide();
        $(this).css("background","red").siblings().css("background","#fff");
    },start);
    $(".pic li").each(function(index){
        $(this).hover(function(){
            stop();
            show(index);
            num = index+1;
        },start)
    });
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            timer = setInterval(function(){
                showpic(num);
                num++;
                if(num== $(".pic li").size()){
                    num =0;
                }
            },2000);
        }
    }
    function stop() {
        clearInterval(timer);
        hasStarted = false;
    }
    start();
});