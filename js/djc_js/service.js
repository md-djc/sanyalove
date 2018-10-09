//返回顶部
$('.bg-top').click(function(event) {
	$('html,body').animate({'scrollTop':'0px'},1000)
});
//左侧边栏
$('.service-left ul li').mouseenter (function(){
	if($(this).children('a').hasClass('current')==true){
	}
	else{
		$(this).children('a').css('background',"url('../img/djc_img/s.jpg') center no-repeat");
		$(this).children('a').css('background-position', '-500%');
		$(this).children('a').animate({'background-position':'50%'},500);
	}
})
$('.service-left ul li').mouseleave (function(){
	if($(this).children('a').hasClass('current')==true){
	}
	else{
		$(this).children('a').css('background','none');
	}
})