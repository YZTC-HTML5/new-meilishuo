angular.module('classifyModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify',{
            url: '/classify',
            templateUrl: 'components/classify/classify.html',
            controller:'classifyCtrl',
            css:'components/classify/classify.css'
        })
})
.controller('classifyCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/classify1.json').success(function(res){
		console.log(res);
		$scope.img1=res.data[32377].list[0].image;
		
		
		
	})
	
}])