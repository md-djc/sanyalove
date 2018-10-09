/**
 * Created by liuha on 2018/9/27.
 */

$.ajax({
    type:'get',
    url:'https://jingyihanhao.github.io/xiangmu/sanyalove.net/json/hoteldata.json',
    /*由此可见webstrom对于php文件并没有判断行为的出现*/
    success:function (res) {
        function adddata(id_now){
            $('.hotel_box').eq(id_now).children('.hotel_title_box').children('.title_name').html(res.title[id_now]);
            $('.hotel_box').eq(id_now).children('.hotel_title_box').children('.title_place').html(res.place[id_now]);
            $('.hotel_box').eq(id_now).children('.hotel_title_box').children('.title_con').html(res.moreinfor[id_now]);
            var  hotelid = new Array();
            for(var j = 0; j < res.hotel.length; j ++) {
                if(res.hotel[j].hotelid == id_now+1){
                    hotelid[hotelid.length] = res.hotel[j];
                }
            }
            console.log(hotelid);
            for(var l = 0; l < hotelid.length; l ++){
                if(l < 1){
                    $('.hotel_box').eq(id_now).children('.hotel_main_box').children('.main_part').eq(0).children('.main_box').children('.title').children('a').html(hotelid[l].hotelname);
                    $('.hotel_box').eq(id_now).children('.hotel_main_box').children('.main_part').eq(0).children('.main_box').children('.pic').children('a').children('img').attr('src',hotelid[l].imgsrc);
                    $('.hotel_box').eq(id_now).children('.hotel_main_box').children('.main_part').eq(0).children('.main_box').children('.con').html(hotelid[l].hotel_infor);
                }
                else{
                    var partmin = $('.hotel_main_box .main_part').eq(0).clone(true);
                    partmin.children('.main_box').children('.title').children('a').html(hotelid[l].hotelname);
                    partmin.children('.main_box').children('.pic').children('a').children('img').attr('src',hotelid[l].imgsrc);
                    partmin.children('.main_box').children('.con').html(hotelid[l].hotel_infor);
                    $('.hotel_box').eq(id_now).children('.hotel_main_box').append(partmin);
                }
            }
        }
        for(var i = 0; i < res.title.length; i ++){
            $('.hotel_topnav a').eq(i).html(res.title[i]);
            $('.hotel_topnav a').eq(i).attr('href','#hotel'+(i+1));
            $('.hotel_box').eq(i).attr('id','hotel'+(i+1));
            adddata(i);
        }
    }
})
