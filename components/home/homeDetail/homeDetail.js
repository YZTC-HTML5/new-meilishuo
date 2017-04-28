angular.module('homeDetailModule', [])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home.homeDetail', {
				url: '/homeDetail',
				templateUrl: 'components/home/homeDetail/homeDetail.html',
				controller: 'homeDetailCtrl',
				css: ['components/home/homeDetail/homeDetail.css']
			})
	})
	.controller('homeDetailCtrl', ['$scope', 'myFactory', function($scope, myFactory) {
		//	$scope.data = JSON.parse(localStorage.getItem('mineToDetail112'));
		//	console.log($scope.data);

		//	console.log($stateParams.name);

		$scope.details = myFactory.get();
		$scope.addCar = function(obj1) {
			var local = localStorage.getItem('carGoods1');
			if(local) {
				var carArr1 = JSON.parse(local);
				
				var isHas = false;
				for(var i = 0; i < carArr1.length; i++) {
					if(carArr1[i].title == obj1.title) {
						carArr1[i].num++;
						isHas = true;
					}
				}
				if(!isHas) {
					obj1.num = 1;
					carArr1.push(obj1)
				}
				localStorage.setItem('carGoods1', JSON.stringify(carArr1));
			} else {
				obj1.num = 1;
				var carArr = [obj1];
				localStorage.setItem('carGoods1', JSON.stringify(carArr));
			}
		}
	}])