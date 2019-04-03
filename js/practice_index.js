window.addEventListener('load',function(){
    searchGradient();
    downTime();
});

//封装函数
function searchGradient() {
    
    //获取元素
    var slide  = document.querySelector('#slide');
    var header  = document.querySelector('#header');

    function scroll() {
        //获取当前滚动的高
        var scrollTop = document.documentElement.scrollTop;
        //header的高
        var slideHeight = slide.offsetHeight;
        //计算透明度
        var opacity = scrollTop / slideHeight ;

        //赋值
        header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
    }
    document.addEventListener('scroll',function (e) {
        scroll();        
    })
}

// function slide() {
//     }
    function downTime() {
       //设置时间
       var time = 2 * 60 * 60;

       var spans = document.querySelectorAll('.downtime span');
       setDownTime();
       function setDownTime() {
           if (time<=0) {
               time = 2 * 60 *60 ;
           };
           var hour = Math.floor(time / 60 /60);
           var minute = Math.floor(time / 60 % 60);
           var second = Math.floor(time % 60);

           spans[0].innerHTML = Math.floor(hour / 10);
           spans[1].innerHTML = Math.floor(hour % 10);
           spans[3].innerHTML = Math.floor(minute / 10);
           spans[4].innerHTML = Math.floor(minute % 10);
           spans[6].innerHTML = Math.floor(second / 10);
           spans[7].innerHTML = Math.floor(second % 10);
       }
       //设置定时器
       setInterval(function() {
            time--;
            setDownTime();
       }, 1000);
    }