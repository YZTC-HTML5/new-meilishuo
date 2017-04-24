angular.module('sortnewModule',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortnew',{
            url: '/sortnew',
            templateUrl: 'components/classify/list1/sortnew/sortnew.html',
            controller:'sortnewCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/sortnew/sortnew.css']
        })
})
.controller('sortnewCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/classify/list1/sortnew/sortnew.json').success(function(res){
		$scope.arr=res.data.list;	
	})
}])