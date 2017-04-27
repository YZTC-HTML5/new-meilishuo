angular.module('homeDetailModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.homeDetail',{
            url: '/homeDetail',
            templateUrl: 'components/home/homeDetail/homeDetail.html',
            controller:'homeDetailCtrl',
            css:['components/home/home.css','components/home/homeDetail/homeDetail.css']
        })
})
.controller('homeDetailCtrl',['$scope','myFactory',function($scope,myFactory){
//	$scope.data = JSON.parse(localStorage.getItem('mineToDetail112'));
//	console.log($scope.data);
	
//	console.log($stateParams.name);
	
	console.log(myFactory.get());
	$scope.details=myFactory.get();
	console.log(myFactory.get(myFactory.get()));
}])