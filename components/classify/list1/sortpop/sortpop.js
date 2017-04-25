angular.module('sortpopModule',[])
.config(function($stateProvider, $urlRouterProvider){
//	$routeProvider.otherwise({redirectTo: '/sortpop'});
    $stateProvider
        .state('classify.list1.sortpop',{
            url: '/sortpop',
            templateUrl: 'components/classify/list1/sortpop/sortpop.html',
            controller:'sortpopCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/sortpop/sortpop.css']
        })
})
.factory('myFactory', function () {

 var myServices = {}; 

 var myObject = {};
  

 var _set = function (data) {
  myObject = data;  
 };

 var _get = function () {
  return myObject;
 };
 

 myServices.set = _set;
 myServices.get = _get;
  
 // 在controller中通过调set()和get()方法可实现提交或获取参数的功能
 return myServices;
  
})
.controller('sortpopCtrl',['$scope','$http','myFactory',function($scope,$http,myFactory){
	$http.get('components/classify/list1/sortpop/sortpop.json').success(function(res){
		$scope.arr=res.data.list;	
		$scope.content=function(item){
			myFactory.set(item);
			console.log(item);
		}
	})
}])