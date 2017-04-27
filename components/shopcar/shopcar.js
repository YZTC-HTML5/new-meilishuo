angular.module('shopcarModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('shopcar',{
            url: '/shopcar',
            templateUrl: 'components/shopcar/shopcar.html',
            controller:'shopcarCtrl',
            css:'components/shopcar/shopcar.css'
        })
})
.controller('shopcarCtrl',['$scope',function($scope){
	var local=localStorage.getItem('carGoods1');
	if(local){
		$scope.goodsArr=JSON.parse(local);
		console.log($scope.goodsArr);
		$("#products").hide();
		$("#shopcar_main").show();
		$(".delete").text('删除');
		var totalP=0;
		for(var i=0;i<$scope.goodsArr.length;i++){
			var pic=$scope.goodsArr[i].price.substring(1);
			totalP+=pic*$scope.goodsArr[i].num
		}
		$("#carPic span").text('￥'+totalP)
	}
	$scope.toDelete=function(){
		localStorage.clear();
		$("#products").show();
		$("#shopcar_main").hide();
		$(".delete").text('首页');
	}
	$scope.slide=function(){
		$("#shopcarM_m").slideToggle();
		$("#shopcarM_h>span").toggleClass('slideInUp');
	}
}])