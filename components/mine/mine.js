angular.module('mineModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('mine',{
            url: '/mine',
            templateUrl: 'components/mine/mine.html',
            controller:'mineCtrl',
            css:'components/mine/mine.css'
        })
})
.controller('mineCtrl',['$scope',function($scope){
	$scope.isShopShow=true;
	$scope.changeShopShow=function(){
		$scope.isShopShow=!$scope.isShopShow;
		$scope.isTabShow = true;
	}
}])