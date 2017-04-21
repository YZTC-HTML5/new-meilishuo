angular.module('sortpopModule',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortpop',{
            url: '/sortpop',
            templateUrl: 'components/classify/list1/sortpop/sortpop.html',
            controller:'sortpopCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/sortpop/sortpop.css']
        })
})
.controller('sortpopCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/classify/list1/sortpop/sortpop.json').success(function(res){
		$scope.arr=res.data.list;	
	})
}])