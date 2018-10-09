/**
 * Created by liuha on 2018/9/24.
 */
$('.btn_list ul li').hover(function(){
    $(this).addClass('act').siblings().removeClass('act');
},function(){
    $(this).removeClass('act');
})