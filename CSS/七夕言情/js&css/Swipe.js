/**
 * Created by Administrator on 2015/10/23.
 */
//ҳ�滬��
function Swipe(container) {


    var element = container.find(":first");
    //��������
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


    //���������ƶ�
    swipe.scrollTo = function(x, speed) {
        //ִ�ж����ƶ�
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
        });
        return this;
    };

    return swipe;
}