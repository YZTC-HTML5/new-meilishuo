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
		$scope.img1=res.data[32377].list[0].image;
		$scope.listtu=res.data[15325].list;		
	})
	$http.get('json/classify2.json').success(function(res){
		$scope.listul=res.data[17118].list;	
		$scope.listul2=res.data[17124].list;
		$scope.listul3=res.data[17126].list;
		$scope.listul4=res.data[17127].list;	
		$scope.listul5=res.data[17128].list;	
	})
	$http.get('json/classify3.json').success(function(res){
		$scope.listul6=res.data[17129].list;
		$scope.listul7=res.data[17130].list;	
	})
	
}])