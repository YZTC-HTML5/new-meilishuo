angular.module('homeModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller:'homeCtrl',
            css:'components/home/home.css'
        })
})

.controller('homeCtrl',['$scope','$http',function($scope,$http){
	$scope.ischang=0
	$http.get('json/topContent.json').success(function(res){
		$scope.home_head=res.data[32377];
		$scope.home_up=res.data[5956];
		$scope.home_menu=res.data[13730];
	})
	$http.get('json/niuzaiku.json').success(function(res){
		$scope.home_menu_next=res.data
	})
	$http.get('json/moren.json').success(function(res){
		$scope.moren=res.data.list;
		$scope.home_tab_main=$scope.moren;
		
	})
	$http.get('json/jingxuan.json').success(function(res){
		$scope.jingxuan=res.data.list;
		
	})
	$http.get('json/zuixin.json').success(function(res){
		$scope.zuixin=res.data.list;
	
	})
	$scope.isClick=function(datas,i){
		$scope.ischang=i;
		$scope.home_tab_main=datas;	
		
	}
	$("#main").onscroll = function () {
		console.log(999)
	}
//	$("#sec").on('scroll',function(){
//		console.log(11111);
//	})
	$("#main").on('scroll',function(){
		console.log(11111);
	})
	
}])