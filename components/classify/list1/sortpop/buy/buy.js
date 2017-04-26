angular.module('buyModule',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortpop.buy',{
            url: '/buy',
            templateUrl: 'components/classify/list1/sortpop/buy/buy.html',
            controller:'buyCtrl',
            css:['components/classify/list1/sortpop/buy/buy.css']
        })
})
.controller('buyCtrl',['$scope','myFactory',function($scope,myFactory){
	$scope.arr=myFactory.get();
	$scope.img=$scope.arr.show.img;
	$scope.p=$scope.arr.title;
	$scope.pri1=$scope.arr.price;
	$scope.pri2=$scope.arr.orgPrice;
	
}])