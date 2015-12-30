


/**
 * Created by Administrator on 2015/10/26.
 */
var app=angular.module('app',[]);
app.controller('AppCtrl',function($scope){
    $scope.loadMoreMsg=function(){
        alert('loading...');
    }
    $scope.delMsg=function(){
        alert('deling...');
    }
});
app.directive('enter',function(){
    return function(scope,element,attrs){
         element.bind('mouseenter',function(){
             //scope.loadMoreMsg();
             //scope.$apply("loadMoreMsg()");
             scope.$apply(attrs.enter);
         });
    }
});
//app.directive('enter',function(){
//    return function(scope,element,attrs){
//        element.bind('mouseenter',function(){
//            scope.loadMoreMsg();
//        });
//    }
//});

