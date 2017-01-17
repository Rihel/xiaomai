'use strict';

$(function () {
    // let resbox = $('.resbox'),
    //     resusername = resbox.find('input[type=username]'),
    //     respassword = resbox.find('input[type=password'),
    //     regbtn = resbox.find('button'),
    //     userMesg = resbox.find('.user-mesg'),
    //     passMesg = resbox.find('.pass-mesg');
    // regbtn.on('click', function() {
    //     if (resusername.val().length >= 11 && /^[\u4e00-\u9fa5]/g.test(resusername.val())) {
    //         resusername.removeClass('input-error').addClass('input-success');
    //         userMesg.html(`请输入11个字符,数字、字母、下划线，不能使用汉字,推荐使用手机号码`).addClass('info-error');
    //         return false;
    //     }
    // })
    $('.box-control').find('.col-md-2').on('click', function () {
        $('.box-control').find('.col-md-2').removeClass('active');
        $('.box-wrapper').find('.item').hide();
        $(this).addClass('active');
        var index = $(this).index();
        console.log(index);
        $('.box-wrapper').find('.item').eq(index).show();
    });
});