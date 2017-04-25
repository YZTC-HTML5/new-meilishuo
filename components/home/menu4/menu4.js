angular.module('menu4Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.menu4',{
            url: '/menu4',
            templateUrl: 'components/home/menu4/menu4.html',
            controller:'menu4Ctrl',
            css:['components/home/home.css','components/home/menu4/menu4.css']
        })
})
.controller('menu4Ctrl',['$scope','$http',function($scope,$http){
//	$http.get('json/mrsx_4.json').success(function(res){
//		console.log(res.data);
//		$scope.mrsx_4=res.data.list;
//		$scope.menu0_main=$scope.mrsx_4;
//	})
	
}])