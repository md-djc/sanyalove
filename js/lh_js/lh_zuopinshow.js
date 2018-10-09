var height_img = $(".show_lunbo ul li.nowshow").outerHeight();
$(".show_lunbo").css("height",height_img+'px');
var height_btn = $("ul.show_btn li").eq(0).outerHeight();
$(".show_btn li").eq(0).siblings().css("height",height_btn+'px');
$(window).resize(function() {
    height_img = $(".show_lunbo ul li.nowshow").outerHeight();
    $(".show_lunbo").css("height",height_img+'px');
    height_btn = $("ul.show_btn li").eq(0).outerHeight();
    $(".show_btn li").eq(0).siblings().css("height",height_btn+'px');
});
$(".show_btn li").click(function () {
    var nowshowindex = $(this).index();
    $(this).addClass('nowshow').siblings().removeClass('nowshow');
    $('.show_lunbo ul').animate({'top':(-nowshowindex*100)+'%'},500);
})