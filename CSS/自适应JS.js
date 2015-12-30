/**
 * Created by Administrator on 2015/9/22.
 */

var winWidth,winHeight;
window.onload=function(){
     checkWinSize();

}
window.onresize=function(){
    checkWinSize();
}
function checkWinSize(){

    getWindowSize();
    if (winWidth>winHeight){//横屏

     document.getElementById('tipbox').style.display='block';
        document.getElementById('loading').style.width=winHeight*0.6+'px';
        document.getElementById('loading').style.height=winHeight*0.6+'px';
        document.getElementById('loading').style.left=(winWidth-winHeight*0.6)/2+'px';
        document.getElementById('loading').style.top=(winHeight-winHeight*0.6)/2+'px';
    }
    else{
        document.getElementById('tipbox').style.display='none';
        document.getElementById('loading').style.width=winWidth*0.6+'px';
        document.getElementById('loading').style.height=winWidth*0.6+'px';


        document.getElementById('loading').style.left=(winWidth-winWidth*0.6)/2+'px';
        document.getElementById('loading').style.top=(winHeight-winWidth*0.6)/2+'px';
    }

}
function getWindowSize(){
    //获取宽度
    if(window.innerWidth){
        winWidth=window.innerWidth;

    }
    else if((document.body)&&(document.body.clientWidth)){
        winWidth=document.body.clientWidth;
    }

//获取高度
    if(window.innerHeight){
        winHeight=window.innerHeight;
    }
    else if((document.body)&&(document.body.clientHeight)){
        winHeight=document.body.clientHeight;
    }
}