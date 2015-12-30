/**
 * Created by Administrator on 2015/10/23.
 */
//页面滑动
function Swipe(container) {


    var element = container.find(":first");
    //滑动对象
    var swipe = {};
    var lis = element.find("li");
    var width = container.width();
    var height = container.height();
    element.css({
        width: (lis.length * width) + 'px',
        height: height + 'px'
    });

    $.each(lis, function (index) {
        var li = lis.eq(index);
        li.css({
            width: width + 'px',
            height: height + 'px'
        });
    });


    //监控完成与移动
    swipe.scrollTo = function(x, speed) {
        //执行动画移动
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
        });
        return this;
    };

    return swipe;
}