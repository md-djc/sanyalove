$('.case_list ul li').mouseenter(function () {
    $(this).find('.bg_black').stop().animate({'opacity':'.6'},400);
    $(this).find('.bg_pic').stop().animate({'top':'0%'},400);
})
$('.case_list ul li').mouseleave(function () {
    $(this).find('.bg_black').stop().animate({'opacity':'0'},400);
    $(this).find('.bg_pic').stop().animate({'top':'-100%'},400);
})
var pbox = $('.case_list>ul>div>li').eq(0).clone(true);
$('.case_topnav a').click(function () {
    var index = $(this).index();
    $('.case_list>ul>div').html('');
    $.ajax({
        type:'get',
        url:'https://jingyihanhao.github.io/xiangmu/sanyalove.net/json/hoteldata.json',
        success:function (res) {
            var  zuopinshow = new Array();
            for(var j = 0; j < res.zuopin.length; j ++) {
                if(res.zuopin[j].zuopinid == index+1){
                    zuopinshow[zuopinshow.length] = res.zuopin[j];
                }
            }
            for(var i = 0 ; i < zuopinshow.length; i++){
                var pcon = `策划师：${zuopinshow[i].zuopinpeople}<br/>${zuopinshow[i].zuopinplace}`;
                if(i < 1){
                    pbox.children('.pic').children('a').children('img').attr('src',zuopinshow[i].imgsrc);
                    pbox.children('.title').html(zuopinshow[i].zuopinname);
                    pbox.children('.con').html(pcon);
                    $('.case_list>ul>div').append(pbox);
                }
                else{
                    var pboxanother = $('.case_list>ul>div>li').eq(0).clone(true);
                    pboxanother.children('.pic').children('a').children('img').attr('src',zuopinshow[i].imgsrc);
                    pboxanother.children('.title').html(zuopinshow[i].zuopinname);
                    pboxanother.children('.con').html(pcon);
                    $('.case_list>ul>div li').eq(-1).after(pboxanother);
                }
            }

        }
    })
})
/*<div class="con">

</div>*/
