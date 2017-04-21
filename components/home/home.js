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

//依赖注入
.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:500,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  }) 
	},10);
}])

.controller('homeCtrl',['$scope','$http','swiper',function($scope,$http){
//	$http.get('json/09.json').success(function(res){
//		console.log(res)
//	})
}])