angular.module('list1Module',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify.list1',{
            url: '/list1',
            templateUrl: 'components/classify/list1/list1.html',
            controller:'list1Ctrl',
            css:['components/classify/list1/list1.css']
        })
})
.controller('list1Ctrl',['$scope',function($scope){
	
}])