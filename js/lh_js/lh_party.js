$('.case_list ul li').mouseenter(function () {
    $(this).find('.bg_black').stop().animate({'opacity':'.6'},400);
    $(this).find('.bg_pic').stop().animate({'top':'0%'},400);
})
$('.case_list ul li').mouseleave(function () {
    $(this).find('.bg_black').stop().animate({'opacity':'0'},400);
    $(this).find('.bg_pic').stop().animate({'top':'-100%'},400);
})