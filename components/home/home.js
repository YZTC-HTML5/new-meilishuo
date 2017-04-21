angular.module('homeModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller:'homeCtrl',
            css:'components/home/home.css'
        })
})
.controller('homeCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/09.json').success(function(res){
		console.log(res)
	})
}])