angular.module('searchModule2',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify.list1.search',{
            url: '/search',
           templateUrl: 'components/classify/list1/search/search.html',
            controller:'searchCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/search/search.css']
        })
})
.controller('searchCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/topContent.json').success(function(res){
		console.log(res.data);
		$scope.search=res.data[5868];
	})
}])



