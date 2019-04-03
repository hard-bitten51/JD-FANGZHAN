window.addEventListener('load',function () {
    //调用初始化左侧分类的功能函数
    initLeftSlide();
    //初始化右侧分类的滑动
    initRightSlide();

    leftCeiling();
});

function initLeftSlide() {
    var swiper = new Swiper('.category-left .swiper-container', {

        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
  
}

//分类左侧点击吸顶函数
function leftCeiling() {
  //1.滑动的父容器
  var swiperContainer = document.querySelector('.swiper-container');
  //2.真正做滑动的容器
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  
  //3.滑动的内容的子容器
  var swiperSlide = document.querySelector('.swiper-slide');
  //获取所有li元素
  var lis = document.querySelectorAll('.category-left ul li');

  for (var i = 0; i < lis.length; i++) {
    lis[i].dataset['index'] = i;
    lis[i].addEventListener('click',function(){
      console.log(this);
      
      var index = this.dataset['index'];
      //计算位移距离-索引 * 高度 因为往上位移是负值

      var translateY = -index * this.offsetHeight;
      console.log(translateY);
      //位移之前判断
      var minTranslateY = swiperContainer.offsetHeight - swiperSlide.offsetHeight;

      if (translateY < minTranslateY) {
        translateY = minTranslateY;
      }
      //原本是使用3D位移动的所以还用3D移动
      swiperWrapper.style.transform = 'translate3d(0px,'+translateY+'px,0px)';

      swiperWrapper.style.transition ='all .3s';

      //给所有li删去active类
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
      }
      //给点击的this添加active
      this.classList.add('active');
    })
  }
}

function initRightSlide() {
    var swiper = new Swiper('.category-right .swiper-container', {

        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
  
}
