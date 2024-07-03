'use strict';

/* -------　modal　------- */
$(function(){
    $('.modalOpen').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $('.modalbg').fadeIn();
            $(modal).fadeIn();
            return false;
        });
    });
    $('.modalClose, .modalbg').on('click',function(){
        $('.modalContainer').fadeOut();
        $('.modalbg').fadeOut();
        return false;
    }); 
  });


/* -------　nav　------- */

$("#openNav").click(function () {//ボタンがクリックされたら
    $("#nav").toggleClass('show');//showクラスを付与
  });
  
  $("#closeNav").click(function () {//ボタンがクリックされたら
      $("#nav").removeClass('show');//showクラスを除去
  });

/* -------　loading sign　------- */

$(function(){
    $(window).on('load', function(){ //ページ内の全ての要素が読み込まれたら実行
        $('.loading').delay(1000).fadeOut(300); //消えるタイミング
    });
    function stopload(){
        $('.loading').delay(1000).fadeOut(500);
    }
    setTimeout(stopload, 2000); //2秒で強制非表示
});

/* -------　topback　------- */
$(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
    });
});