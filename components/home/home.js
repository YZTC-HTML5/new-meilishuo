angular.module('homeModule', ['me-lazyload'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'components/home/home.html',
				controller: 'homeCtrl',
				css: 'components/home/home.css'
			})
	})
	.factory('myFactory', function() {
		//定义factory返回对象
		var myServices = {};
		//定义参数对象
		var myObject = {};
		var _set = function(data) {
			myObject = data;
		};
		var _get = function() {
			return myObject;
		};
		myServices.set = _set;
		myServices.get = _get;
		return myServices;

	})

	.controller('homeCtrl', ['$scope', '$http', 'myFactory', function($scope, $http, myFactory) {
		$scope.ischang = 0;
		$http.get('json/topContent.json').success(function(res) {
			$scope.home_head = res.data[32377];
			$scope.home_up = res.data[5956];
			$scope.home_menu = res.data[13730];
			//		$scope.toMenu=function(res){
			//			localStorage.clear();
			//			localStorage.setItem('mineToDetail112',JSON.stringify(res));
			//
			//		}

		})
		$http.get('json/niuzaiku.json').success(function(res) {
			$scope.home_menu_next = res.data
		})
		$http.get('json/moren.json').success(function(res) {
			$scope.moren = res.data.list;
			$scope.home_tab_main = $scope.moren;

		})
		$http.get('json/jingxuan.json').success(function(res) {
			$scope.jingxuan = res.data.list;

		})
		$http.get('json/zuixin.json').success(function(res) {
			$scope.zuixin = res.data.list;
			$scope.toDetail = function(item) {
				myFactory.set(item);

			}

		})
		$scope.isClick = function(datas, i) {
			$scope.ischang = i;
			$scope.home_tab_main = datas;

		}
		$("#main").on('scroll', function() {
			if($("#main").scrollTop() > 1400) {
				$("#mbj").show();
				$("#home_tab").addClass('dw')
			} else {
				$("#home_tab").removeClass('dw')
				$("#mbj").hide();
			}
		})

	}])