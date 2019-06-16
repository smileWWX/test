function doMove(obj,arrt,dir,target) {
    // alert(parseInt(getStyle(oDiv,'left')))
  dir =  parseInt( getStyle(obj,arrt) ) <  target ? dir  : -dir;
    clearInterval(obj.timer); //clearInterval还有clearTimeoutjs就是原生方法可以清楚isnotdefind即未声明的对象，所以定时器的名字可以不用声明直接使用
    obj.timer= setInterval(function () {
       var speed =parseInt(getStyle(obj,arrt)) + dir;
       if (speed < target && dir < 0 || speed > target && dir > 0) {
        speed =target; //上面的两个条件下的执行代码一样都可以用||进行合并
       }
    obj.style[arrt] = speed + 'px';
      },20)
}
function getStyle(obj,attr){
   return  obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
