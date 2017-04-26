angular.module('sorthotModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('classify.list1.sorthot',{
            url: '/sorthot',
            templateUrl: 'components/classify/list1/sorthot/sorthot.html',
            controller:'sorthotCtrl',
            css:['components/classify/list1/list1.css','components/classify/list1/sorthot/sorthot.css']
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
.controller('sorthotCtrl',['$scope','$http','myFactory',function($scope,$http,myFactory){
	$http.get('components/classify/list1/sorthot/sorthot.json').success(function(res){
		$scope.arr=res.data.list;
		$scope.content=function(item){
			myFactory.set(item);
			console.log(item);
		}
	})
}])