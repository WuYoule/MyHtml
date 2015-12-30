var container = $("#content");
// 页面可视区域
var visualWidth = container.width();
var visualHeight = container.height();

var swipe = Swipe(container);
// 获取数据
var getValue = function(className) {
    var $elem = $('' + className + '');
    //走路的路线坐标
    return {
        height: $elem.height(),
        top: $elem.position().top
    };
}

// 路的Y轴
var pathY = function() {
    var data = getValue('.a_background_middle');
    return data.top + data.height / 2;
}();
var $boy = $("#boy");
var boyHeight = $boy.height();
// 修正小男孩的正确位置
$boy.css({
    top: pathY - boyHeight + 25
});



////////////////////////////////////////////////////////
//===================动画处理==========================//
////////////////////////////////////////////////////////

//恢复腿的动作
function restoreWalk(){
    $boy.removeClass('pauseWalk');
}
//腿的动作（脚来回原地踏步）
function slowWalk(){
    $boy.addClass('slowWalk');
}
//计算移动的距离
function calculateDist(direction,proportion){
    return (direction=="x"?visualWidth:visualHeight)*proportion;
}



//css3走的动画
function startRun(x,y,runTimes){
    var dfdPlay= $.Deferred();
    restoreWalk();
    $boy.css({
        "top":x+'px',
        "left":y+'px',
        "transition":'all '+runTimes+'s linear'
    });
    return dfdPlay;
}

//开始走
function walkRun(time,disX,disY){
    //time=time||3000;
    slowWalk();

    var d1=startRun(disX,disY,time);
    return d1;

}