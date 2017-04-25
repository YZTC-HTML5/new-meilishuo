angular.module('buyModule3',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sorthot.buy',{
            url: '/buy',
            templateUrl: 'components/classify/list1/sorthot/buy/buy.html',
            controller:'buy3Ctrl',
            css:['components/classify/list1/sorthot/buy/buy.css']
        })
})
.controller('buy3Ctrl',['$scope','myFactory',function($scope,myFactory){
	$scope.arr=myFactory.get();
	$scope.img=$scope.arr.show.img;
	$scope.p=$scope.arr.title;
	$scope.pri1=$scope.arr.price;
	$scope.pri2=$scope.arr.orgPrice;
	
}])