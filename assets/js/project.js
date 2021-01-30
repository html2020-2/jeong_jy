$(document).ready(function () {
      /* clearTimeout(timer);

      timer = setTimeout(function () {
          scrollT = $(this).scrollTop();
          
          $('.fade').each(function () {
              if(scrollT > $(this).offset().top - 500) $(this).addClass('on');
          });
      }, 50);
  $(window).trigger('scroll'); */
  

  //큰원 움직이기
  $('.bigMainCircle').addClass('up');
  setTimeout(function () {
    $('.bigMainCircle').removeClass('up').addClass('leftout');
  }, 1500);

  //스크롤에 따라 원을 왼쪽으로 회전시켜 없애기
  /* $(window).on('scroll', function (){
    var targetTop = $(this).scrollTop();
    var _bigCircle = $('.bigMainCircle');
    var fixTop = _bigCircle.offset().top;

    console.log(targetTop, _bigCircle);

    if (targetTop > 20 ) {
      _bigCirlce.stop().animate({left: '-200%'}, 4000);
    } else {
      _bigCircle.stop().animate({left: '0'}, 4000);
    }



  }); */


  /* window.addEventListener('scroll', () => {
    var scrollLocation = parseInt(document.documentElement.scrollTop); // 현재 스크롤바 위치 
    var fullHeight = parseInt(document.body.scrollHeight); // 전체 높이(margin 포함 x)
    var repeat = 10; // 얼마나 빠르게 회전할지
    var degree = parseInt((scrollLocation)/fullHeight * 360) * repeat;
    var _deg = degree + 'deg'; $('.bigMainCircle').css('transform','rotate('+ _deg +')'); }) */

  
  // gopro swiper
  var goproiSwiper = new Swiper('#gopro7 .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
    },
  })

  // heyri swiper
  var heyriSwiper = new Swiper('#heyri6 .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
    },
  })
});