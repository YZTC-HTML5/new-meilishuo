angular.module('searchModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.search',{
            url: '/search',
            templateUrl: 'components/home/search/search.html',
            controller:'searchCtrl',
            css:['components/home/home.css','components/home/search/search.css']
        })
})
.controller('searchCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/topContent.json').success(function(res){
		console.log(res.data);
		$scope.search=res.data[5868];
	})
}])