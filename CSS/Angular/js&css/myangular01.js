/**
 * Created by Administrator on 2015/10/26.
 */
angular.module('app',[])
.controller('FirstCtrl',function($scope){
        $scope.msg="hello world!";
    })
.controller('NextCtrl',function($scope){
        $scope.msg="hello myself!";
    })