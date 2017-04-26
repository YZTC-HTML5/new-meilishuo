angular.module('tipsModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('mine.tips',{
            url: '/tips',
            templateUrl: 'components/mine/tips/tips.html',
//          controller:'tipsCtrl',
            css:['components/mine/mine.css','components/mine/tips/tips.css']
        })
})