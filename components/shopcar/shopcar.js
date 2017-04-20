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
	
}])