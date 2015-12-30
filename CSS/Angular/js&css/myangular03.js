/**
 * Created by Administrator on 2015/10/26.
 */
var app=angular.module('app',[]);
app.directive('hello',function(){
    return {
        restrict:'C',
        link:function(){
            alert("i'm class");
        }
    }
});

app.directive('jike',function(){
    return {
        restrict:'A',
        link:function(){
            alert("i'm attr");
        }
    }
});