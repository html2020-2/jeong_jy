$(document).ready(function () {
    var scrollY;
    var _gnb = $('.navWrap')

    //메뉴열기 클릭
    $('.btn_open').on('click', function () {
            var $first = _gnb.find('[data-link=first]');
            var $last = _gnb.find('[data-link=last]');

            _gnb.css({visibility: 'visible', transition: 'all 0.3s'}).stop().animate({left: 0}, 500, function () {
                $first.focus();
            });

            $first.on('keydown', function (e) {
                console.log(e.keycode);
                if(e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });

            $last.on('keydown', function (e) {
                if(!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('.btn_open').focus();
                }
            });

        });

    //메뉴닫기 클릭
    $('.btn_close').on('click', function () {
            _gnb.stop().animate({left: '100%'}, 500, function () {
                    $(this).css({visibility: 'hidden'});
                });
    });  

    $('#gnb ul li a').on('click', function (e) {
        e.preventDefault();

        var urlpage = $(this).attr('href');
        var gnbNum = $(this).parent().index(); //0(HOME), 2(WORKS), 3(ABOUT), 3(CONTACT)
        var url = location.href;
        var isIndex = url.indexOf('index.html');
        if (isIndex > 0) isIndex = true; //index페이지를 의미
        else isIndex = false; //서브페이지를 의미

        if (isIndex) {//index.html 페이지에서 네비게이션을 클릭한 경우
            $('.btn_close').click();
            setTimeout(function () {
                if (gnbNum === 0) {
                    if ($('#work').hasClass('view')) {
                        $('html, body').stop().animate({scrollTop: 0}, function (){
                            $('#backBtn').click();
                        });
                    }
                    else {
                        $('html, body').stop().animate({scrollTop: 0});
                    }

                } else if (gnbNum === 1) {
                    if ($(window).scrollTop() > 10) {
                        $('html, body').stop().animate({scrollTop: 0}, function(){
                            $('#workBtn').click();
                        });
                    } else {
                        $('#workBtn').click();
                    }
                } else if (gnbNum === 2) {
                    if ($('#work').hasClass('view')) {
                        $('#backBtn').click();
                        $('html, body').stop().delay(400).animate({scrollTop: $('#cnt2').offset().top});
                    } else {
                        $('#aboutBtn').click();
                    }
                } else if (gnbNum === 3 ) {
                    if ($('#work').hasClass('view')) {
                        $('#backBtn').click();
                        $('html, body').stop().delay(400).animate({scrollTop: $('#footer').offset().top});
                    } else {
                        $('#aboutBtn').click();
                        $('html, body').stop().animate({scrollTop: $('#footer').offset().top});
                    }
                }
            }, 600);
        } else { //sub페이지에서 네비게이션을 클릭한 경우
            $('.btn_close').click();
            setTimeout(function (){
                location.href = urlpage;
            }, 700);
        }
    });

    //sub에서 페이지 이동된 경우 자연스러운 스크롤 이동
    var url = location.href;
    var goNum = url.indexOf('target=');
    var goTarget = url.slice(goNum+7)
    //console.log(goTarget, typeof goTarget);

    if (goTarget === '#work') {
        setTimeout(function () {
            $('#workBtn').trigger('click');
        }, 700);
    } else if (goTarget === '#cnt2') {
        $('html, body').stop().animate({scrollTop: $('#cnt2').offset().top}, 400);
    } if (goTarget === '#footer') {
        $('html, body').stop().animate({scrollTop: $('#footer').offset().top}, 700);
    }


});