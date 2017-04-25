angular.module('menu0Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.menu0',{
            url: '/menu0',
            templateUrl: 'components/home/menu0/menu0.html',
            controller:'menu0Ctrl',
            css:['components/home/home.css','components/home/menu0/menu0.css']
        })
})
.controller('menu0Ctrl',['$scope','$http',function($scope,$http){
	$scope.isred=0;
	$http.get('json/mrsx_4.json').success(function(res){
		console.log(res.data);
		$scope.mrsx_4=res.data.list;
		$scope.menu0_main=$scope.mrsx_4;
	})
	$http.get('json/mrsx_3.json').success(function(res){
		console.log(res.data);
		$scope.mrsx_3=res.data.list
	})
	$http.get('json/mrsx_2.json').success(function(res){
		console.log(res.data);
		$scope.mrsx_2=res.data.list
	})
	$http.get('json/mrsx_1.json').success(function(res){
		console.log(res.data);
		$scope.mrsx_1=res.data.list;
	})
	$scope.tabClick=function(datas,i){
		$scope.isred=i;
		$scope.menu0_main=datas;	
		
	}
	$("#home_box").on('scroll',function(){
			console.log($("#home_box").scrollTop());
		})
	
}])