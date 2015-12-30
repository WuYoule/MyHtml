var container = $("#content");
// ҳ���������
var visualWidth = container.width();
var visualHeight = container.height();

var swipe = Swipe(container);
// ��ȡ����
var getValue = function(className) {
    var $elem = $('' + className + '');
    //��·��·������
    return {
        height: $elem.height(),
        top: $elem.position().top
    };
}

// ·��Y��
var pathY = function() {
    var data = getValue('.a_background_middle');
    return data.top + data.height / 2;
}();
var $boy = $("#boy");
var boyHeight = $boy.height();
// ����С�к�����ȷλ��
$boy.css({
    top: pathY - boyHeight + 25
});



////////////////////////////////////////////////////////
//===================��������==========================//
////////////////////////////////////////////////////////

//�ָ��ȵĶ���
function restoreWalk(){
    $boy.removeClass('pauseWalk');
}
//�ȵĶ�����������ԭ��̤����
function slowWalk(){
    $boy.addClass('slowWalk');
}
//�����ƶ��ľ���
function calculateDist(direction,proportion){
    return (direction=="x"?visualWidth:visualHeight)*proportion;
}



//css3�ߵĶ���
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

//��ʼ��
function walkRun(time,disX,disY){
    //time=time||3000;
    slowWalk();

    var d1=startRun(disX,disY,time);
    return d1;

}