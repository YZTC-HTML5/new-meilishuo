angular.module('searchModule1',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify.search',{
            url: '/search',
            templateUrl: 'components/classify/search/search.html',
            controller:'searchCtrl',
            css:['components/classify/classify.css','components/classify/search/search.css']
        })
})
.controller('searchCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/topContent.json').success(function(res){
		console.log(res.data);
		$scope.search=res.data[5868];
	})
}])



