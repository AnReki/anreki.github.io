var mySwiper = new Swiper('.swiper', {
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true, //点击分页器切换banner
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
}) 