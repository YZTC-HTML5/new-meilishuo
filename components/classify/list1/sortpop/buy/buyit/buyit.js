angular.module('buyitModule',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortpop.buy.buyit',{
            url: '/buyit',
            templateUrl: 'components/classify/list1/sortpop/buy/buyit/buyit.html',
            controller:'buyitCtrl',
            css:['components/classify/list1/sortpop/buy/buy.css','components/classify/list1/sortpop/buy/buyit/buyit.css']
        })
})
.controller('buyitCtrl',['$scope',function($scope){
//	$scope.arr=myFactory.get();
//	$scope.img=$scope.arr.show.img;
//	$scope.p=$scope.arr.title;
//	$scope.pri1=$scope.arr.price;
//	$scope.pri2=$scope.arr.orgPrice;
	
}])