angular.module('sorthotModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify.list1.sorthot',{
            url: '/sorthot',
            templateUrl: 'components/classify/list1/sorthot/sorthot.html',
            controller:'sorthotCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/sorthot/sorthot.css']
        })
})
.controller('sorthotCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/classify/list1/sorthot/sorthot.json').success(function(res){
		$scope.arr=res.data.list;	
	})
}])