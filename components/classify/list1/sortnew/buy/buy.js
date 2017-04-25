angular.module('buyModule2',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortnew.buy',{
            url: '/buy',
            templateUrl: 'components/classify/list1/sortnew/buy/buy.html',
            controller:'buy1Ctrl',
            css:['components/classify/list1/sortnew/buy/buy.css']
        })
})
.controller('buy1Ctrl',['$scope','myFactory',function($scope,myFactory){
	$scope.arr=myFactory.get();
	$scope.img=$scope.arr.show.img;
	$scope.p=$scope.arr.title;
	$scope.pri1=$scope.arr.price;
	$scope.pri2=$scope.arr.orgPrice;
	
}])